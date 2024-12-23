import { TranslationMessages } from 'react-admin';
import { mergeTranslations  } from 'ra-core';
import englishMessages from 'ra-language-english';
import { translate as tickets } from '@/containers/tickets/translate';
import { translate as issues } from "@/containers/issues/translate";
import { translate as dashboard} from "@/containers/dashboard/translate";
import { translate as schedule } from "@/containers/schedules/translate";
import { translate as stepper } from "@/components/Steppers/locales";

const customEnglishMessages: TranslationMessages = {
    ...englishMessages,
    ...mergeTranslations,
    pos: {
        home: "Home",
        search: 'Search',
        configuration: 'Configuration',
        language: 'Language',
        theme: {
            name: 'Theme',
            light: 'Light',
            dark: 'Dark',
        },
        dashboard: {
            monthly_revenue: 'Monthly Revenue',
            month_history: '30 Day Revenue History',
            new_orders: 'New Orders',
            pending_reviews: 'Pending Reviews',
            all_reviews: 'See all reviews',
            new_customers: 'New Customers',
            all_customers: 'See all customers',
            pending_orders: 'Pending Orders',
            order: {
                items: 'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
            },
            welcome: {
                title: 'Welcome to the react-admin e-commerce demo',
                subtitle:
                    "This is the admin of an imaginary poster shop. Feel free to explore and modify the data - it's local to your computer, and will reset each time you reload.",
                ra_button: 'react-admin site',
                demo_button: 'Source for this demo',
            },
        },
        menu: {
            sales: 'Sales',
            catalog: 'Catalog',
            customers: 'Customers',
        },
        events: {
            review: {
                title: 'Posted review on "%{product}"',
            },
            order: {
                title: 'Ordered 1 poster |||| Ordered %{smart_count} posters',
            },
        },
    },
    common: {
        assignToMe: "Assign to me",
        button: {
            save: "Save",
            delete: "Delete",
            cancel: "Cancel",
            edit: "Edit",
            comment: "Add comment",
        },
        message: {
            error: {
                email: "Invalid email format",
            },
            commentPlaceholder: "No comments available",
        },
        fullName: "Full name",
        email: "Email",
        phone: "Phone",
        department: "Department",
        address: "Address",
        editProfile: "Edit profile",
        setting: "Setting",
    },
    breadcrumb: {
        schedules: "Schedule",
        tickets: "Tickets",
        issues: "Issues",
        show: "Show",
        create: "Create",
        edit: "Edit",
    },
    schedule: {...schedule.en},
    ticket: {...tickets.en},
    issue: {...issues.en},
    dashboard: {...dashboard.en},
    stepper: {...stepper.en}
};

export default customEnglishMessages;
