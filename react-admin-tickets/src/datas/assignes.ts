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
    avatar: "",
    name: "Nguyễn Hoàng Khải",
    email: "hoangkhai@gmail.com",
    phone: "0352639729",
    address:
      "29 Đường số 1 khu Hiệp Ân, Phường 5, Phường 5, Quận 8, Hồ Chí Minh, Vietnam",
    department: "Nhân sự",
  },
  {
    id: 2,
    avatar: "",
    name: "Võ Thiên Chiều",
    email: "thienchieu@gmail.com",
    phone: "0968468627",
    address: "30 Đ. Phú Thuận, Phú Thuận, Quận 7, Hồ Chí Minh, Vietnam",
    department: "IT",
  },
];
