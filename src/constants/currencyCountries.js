import { Country } from 'country-state-city';

const currencyNames = new Intl.DisplayNames(['en'], { type: 'currency' });

// Country/currency lookup data used by the searchable chapter-currency selector.
// Country and ISO currency codes come from the existing country-state-city dataset.
export const currencyCountries = Country.getAllCountries()
    .filter(country => /^[A-Z]{3}$/.test(country.currency || ''))
    .map(country => {
        let currencyName = country.currency;
        try {
            currencyName = currencyNames.of(country.currency) || country.currency;
        } catch {
            // Keep the ISO code as the label if the runtime has no localized name.
        }

        return {
            country: country.name,
            countryCode: country.isoCode,
            currency: currencyName,
            code: country.currency,
        };
    })
    .sort((a, b) => a.country.localeCompare(b.country));
