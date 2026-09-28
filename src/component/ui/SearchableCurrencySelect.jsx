import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Check, Search, X } from 'lucide-react';
import { currencyCountries } from '../../constants/currencyCountries';

const SearchableCurrencySelect = ({ value, onChange, disabled = false, enableBorder = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const wrapperRef = useRef(null);

    const selectedCurrency = useMemo(
        () => currencyCountries.find(option => option.code === value),
        [value],
    );

    useEffect(() => {
        if (!isOpen) {
            setSearchTerm(selectedCurrency ? `${selectedCurrency.code} · ${selectedCurrency.currency}` : '');
        }
    }, [selectedCurrency, isOpen]);

    useEffect(() => {
        const handleClickOutside = event => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredCurrencies = useMemo(() => {
        const query = searchTerm.trim().toLowerCase();
        if (!query) return currencyCountries;
        return currencyCountries.filter(option =>
            option.country.toLowerCase().includes(query) ||
            option.countryCode.toLowerCase().includes(query) ||
            option.currency.toLowerCase().includes(query) ||
            option.code.toLowerCase().includes(query),
        );
    }, [searchTerm]);

    return (
        <div ref={wrapperRef} className={`relative w-full ${enableBorder ? 'border border-slate-200 rounded-md' : ''}`}>
            <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                    type="text"
                    role="combobox"
                    aria-label="Search country or currency"
                    aria-expanded={isOpen}
                    aria-controls="chapter-currency-options"
                    aria-autocomplete="list"
                    value={isOpen ? searchTerm : (selectedCurrency ? `${selectedCurrency.code} · ${selectedCurrency.currency}` : searchTerm)}
                    onChange={event => {
                        setSearchTerm(event.target.value);
                        setIsOpen(true);
                        if (value) onChange('');
                    }}
                    onFocus={() => {
                        setSearchTerm('');
                        setIsOpen(true);
                    }}
                    disabled={disabled}
                    required={!value}
                    placeholder="Search ISO code or country..."
                    className="w-full pl-10 pr-10 py-3.5 bg-slate-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all text-sm font-semibold text-slate-700 outline-none disabled:opacity-50"
                />
                {value && (
                    <button
                        type="button"
                        aria-label="Clear currency selection"
                        onClick={() => {
                            onChange('');
                            setSearchTerm('');
                            setIsOpen(true);
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                        <X size={16} />
                    </button>
                )}
            </div>

            {isOpen && !disabled && (
                <div
                    id="chapter-currency-options"
                    role="listbox"
                    className="absolute z-[200] mt-2 w-full bg-white shadow-sm border border-slate-100 max-h-60 overflow-y-auto"
                >
                    {filteredCurrencies.length === 0 ? (
                        <div className="p-4 text-center text-sm text-slate-500">No matching countries or currencies.</div>
                    ) : filteredCurrencies.map(option => (
                        <button
                            key={`${option.countryCode}-${option.code}`}
                            type="button"
                            role="option"
                            aria-selected={value === option.code}
                            onClick={() => {
                                onChange(option.code);
                                setIsOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors ${value === option.code ? 'bg-blue-50/50' : ''}`}
                        >
                            <span className="flex items-center justify-between gap-3">
                                <span>
                                    <span className="block text-sm font-bold text-slate-800">{option.country}</span>
                                    <span className="block text-xs text-slate-500">{option.countryCode} · {option.currency} ({option.code})</span>
                                </span>
                                {value === option.code && <Check size={16} className="shrink-0 text-blue-600" />}
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchableCurrencySelect;
