import { TranslationMessages } from 'react-admin';
import vietnameseMessages from 'ra-language-vietnamese';
import { translate as tickets } from '@/containers/tickets/translate';

const customVietnameseMessages: TranslationMessages = {
    ...vietnameseMessages,
    pos: {
        home: "Trang chủ",
        search: 'Tìm kiếm',
        configuration: 'Cấu hình',
        language: 'Ngôn ngữ',
        theme: {
            name: 'Chủ đề',
            light: 'Sáng',
            dark: 'Tối',
        },
        dashboard: {
            monthly_revenue: 'Doanh thu hàng tháng',
            month_history: 'Lịch sử doanh thu 30 ngày',
            new_orders: 'Đơn hàng mới',
            pending_reviews: 'Đánh giá chờ xử lý',
            all_reviews: 'Xem tất cả đánh giá',
            new_customers: 'Khách hàng mới',
            all_customers: 'Xem tất cả khách hàng',
            pending_orders: 'Đơn hàng chờ xử lý',
            order: {
                items: 'bởi %{customer_name}, một món hàng |||| bởi %{customer_name}, %{nb_items} món hàng',
            },
            welcome: {
                title: 'Chào mừng bạn đến với demo react-admin e-commerce',
                subtitle:
                    'Đây là trang quản trị của một cửa hàng poster giả tưởng. Hãy tự do khám phá và chỉnh sửa dữ liệu - nó là dữ liệu cục bộ trên máy tính của bạn và sẽ được đặt lại mỗi lần bạn tải lại trang.',
                ra_button: 'Trang web react-admin',
                demo_button: 'Mã nguồn cho demo này',
            },
        },
        menu: {
            sales: 'Bán hàng',
            catalog: 'Danh mục',
            customers: 'Khách hàng',
        },
        events: {
            review: {
                title: 'Đã đăng đánh giá trên "%{product}"',
            },
            order: {
                title: 'Đặt 1 poster |||| Đặt %{smart_count} poster',
            },
        },
    },
    commons: {
            
    },
    ticket:{...tickets.vi},
};

export default customVietnameseMessages;
