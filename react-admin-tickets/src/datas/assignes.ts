export interface AssignesType {
  id?: number;
  avatar?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  department?: string;
}

export const Assignes: AssignesType[] = [
  {
    id: 1,
    avatar: "https://img.freepik.com/premium-vector/profile-icon-male-avatar_48369-2124.jpg?w=826",
    name: "Nguyễn Hoàng Khải",
    email: "hoangkhai@gmail.com",
    phone: "0352639729",
    address:
      "29 Đường số 1 khu Hiệp Ân, Phường 5, Phường 5, Quận 8, Hồ Chí Minh, Vietnam",
    department: "Nhân sự",
  },
  {
    id: 2,
    avatar: "https://img.freepik.com/premium-vector/profile-icon-male-avatar_48369-2116.jpg?w=826",
    name: "Võ Thiên Chiều",
    email: "thienchieu@gmail.com",
    phone: "0968468627",
    address: "30 Đ. Phú Thuận, Phú Thuận, Quận 7, Hồ Chí Minh, Vietnam",
    department: "IT",
  },
];
