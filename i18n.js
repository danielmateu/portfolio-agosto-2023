import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
    // messages: (await import(`../messages/${locale}.json`)).default
    messages: (await import(`./messages/${locale}.json`)).default
}));