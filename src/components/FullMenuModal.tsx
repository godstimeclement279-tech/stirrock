import { useState } from 'react';
import { X, Edit3, Check, RotateCcw } from 'lucide-react';
import { MenuCategory } from '../types';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: MenuCategory[];
  onUpdateCategories: (updated: MenuCategory[]) => void;
  onResetCategories: () => void;
  onReserveFromMenu: () => void;
}

export function FullMenuModal({
  isOpen,
  onClose,
  categories,
  onUpdateCategories,
  onResetCategories,
  onReserveFromMenu,
}: FullMenuModalProps) {
  const [isEditingDemo, setIsEditingDemo] = useState(false);

  if (!isOpen) return null;

  const handleFieldChange = (
    catId: string,
    itemId: string,
    field: 'name' | 'description' | 'samplePrice',
    value: string
  ) => {
    const next = categories.map((cat) => {
      if (cat.id !== catId) return cat;
      return {
        ...cat,
        items: cat.items.map((item) =>
          item.id === itemId ? { ...item, [field]: value } : item
        ),
      };
    });
    onUpdateCategories(next);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#272124]/80 backdrop-blur-xs overflow-y-auto flex items-start justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="full-menu-title"
    >
      <div className="relative w-full max-w-5xl bg-[#FAF7F3] text-[#272124] border border-[#722F45]/30 shadow-2xl my-6 overflow-hidden">
        {/* Wine-Red Top Header Bar */}
        <div className="bg-[#722F45] text-[#FAF7F3] px-6 sm:px-10 py-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-sans tracking-[0.24em] uppercase text-[#E9E0DF]">
              STIRROCK RESTAURANT · PROPOSED SAMPLE MENU (NIGERIAN & INTERCONTINENTAL)
            </p>
            <h2
              id="full-menu-title"
              className="font-serif text-2xl sm:text-3xl text-[#FAF7F3] mt-1"
            >
              Complete Demonstration Carte
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsEditingDemo(!isEditingDemo)}
              className="editorial-btn inline-flex items-center gap-2 px-4 py-2 bg-[#481B2B] hover:bg-[#FAF7F3] text-[#FAF7F3] hover:text-[#481B2B] text-xs font-sans font-medium tracking-[0.15em] uppercase cursor-pointer whitespace-nowrap shrink-0"
            >
              {isEditingDemo ? <Check size={14} /> : <Edit3 size={14} />}
              <span>
                {isEditingDemo ? 'Done Editing' : 'Edit Sample Prices & Dishes'}
              </span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#FAF7F3] hover:bg-[#481B2B] transition-colors cursor-pointer"
              aria-label="Close full menu"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Editable Demo Notice Banner */}
        <div className="bg-[#E9E0DF]/65 px-6 sm:px-10 py-3.5 border-b border-[#E9E0DF] flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-[#272124]/80">
          <span>
            Proposed sample menu items and illustrative Naira (₦) prices for the
            Stirrock Restaurant sales demo.
            {isEditingDemo &&
              ' Click inside any dish or price below to customize live.'}
          </span>
          <button
            type="button"
            onClick={onResetCategories}
            className="inline-flex items-center gap-1.5 text-[#722F45] hover:text-[#481B2B] font-semibold tracking-wider uppercase cursor-pointer whitespace-nowrap shrink-0"
          >
            <RotateCcw size={13} />
            <span>Reset Default Demo Menu</span>
          </button>
        </div>

        {/* Menu Categories Grid */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`space-y-6 ${
                  category.id === 'desserts' ? 'md:col-span-2' : ''
                }`}
              >
                <div className="border-b border-[#722F45] pb-3 flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-3xl text-[#722F45]">
                      {category.name}
                    </h3>
                    <p className="text-xs font-sans text-[#272124]/60 mt-1">
                      {category.subtitle}
                    </p>
                  </div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#722F45]">
                    {category.groupLabel}
                  </span>
                </div>

                <div
                  className={
                    category.id === 'desserts'
                      ? 'grid grid-cols-1 sm:grid-cols-3 gap-6'
                      : 'space-y-5'
                  }
                >
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="pb-4 border-b border-[#E9E0DF] last:border-b-0"
                    >
                      {isEditingDemo ? (
                        <div className="space-y-2 bg-[#FFFFFF] p-3 border border-[#722F45]/30">
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={item.name}
                              onChange={(e) =>
                                handleFieldChange(
                                  category.id,
                                  item.id,
                                  'name',
                                  e.target.value
                                )
                              }
                              aria-label="Dish name"
                              className="w-full font-serif text-lg text-[#272124] border-b border-[#E9E0DF] px-2 py-1 focus:outline-none focus:border-[#722F45]"
                            />
                            <input
                              type="text"
                              value={item.samplePrice}
                              onChange={(e) =>
                                handleFieldChange(
                                  category.id,
                                  item.id,
                                  'samplePrice',
                                  e.target.value
                                )
                              }
                              aria-label="Sample price"
                              className="w-28 font-sans text-xs text-[#722F45] font-semibold tabular-nums border-b border-[#E9E0DF] px-2 py-1 text-right focus:outline-none focus:border-[#722F45]"
                            />
                          </div>
                          <textarea
                            rows={2}
                            value={item.description}
                            onChange={(e) =>
                              handleFieldChange(
                                category.id,
                                item.id,
                                'description',
                                e.target.value
                              )
                            }
                            aria-label="Dish description"
                            className="w-full font-sans text-xs text-[#272124]/80 border border-[#E9E0DF] p-2 focus:outline-none focus:border-[#722F45]"
                          />
                        </div>
                      ) : (
                        <>
                          <div className="flex items-baseline justify-between gap-4">
                            <h4 className="font-serif text-xl text-[#272124] font-medium">
                              {item.name}
                            </h4>
                            <span className="font-sans text-xs font-semibold text-[#722F45] tabular-nums whitespace-nowrap shrink-0">
                              Demo · {item.samplePrice}
                            </span>
                          </div>
                          <p className="mt-1 font-sans text-xs sm:text-sm text-[#272124]/75 leading-relaxed">
                            {item.description}
                          </p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Footer inside Full Menu */}
          <div className="pt-8 border-t border-[#E9E0DF] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-serif text-lg text-[#722F45]">
              STIRROCK RESTAURANT · Innu Ugbo Street, Agbor 321001
            </p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onReserveFromMenu();
                }}
                className="editorial-btn px-6 py-3 bg-[#722F45] text-[#FAF7F3] hover:bg-[#481B2B] text-xs font-sans font-semibold tracking-[0.18em] uppercase cursor-pointer whitespace-nowrap shrink-0"
              >
                Request a Table
              </button>
              <button
                type="button"
                onClick={onClose}
                className="editorial-btn px-6 py-3 border border-[#722F45] text-[#722F45] hover:bg-[#E9E0DF]/50 text-xs font-sans font-semibold tracking-[0.18em] uppercase cursor-pointer whitespace-nowrap shrink-0"
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
