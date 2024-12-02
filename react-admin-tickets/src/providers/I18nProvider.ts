import polyglotI18nProvider from 'ra-i18n-polyglot';
import viLanguage from "@/i18n/vi";

const I18nProvider = polyglotI18nProvider(
    locale => {
        if (locale === 'en') {
            return import('@/i18n/en').then(messages => messages.default);
        }

        // Always fallback on vi
        return viLanguage;
    },
    'vi',
    [
        { locale: 'vn', name: 'Vietnamses' },
        { locale: 'en', name: 'English' },
    ]
);

export default I18nProvider;