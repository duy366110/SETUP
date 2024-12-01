export interface StatusType {
	background?:string;
	default?: boolean;
	display?:string;
	description?:string;
	foreground?:string;
	id?: number;
	value?: string;
}

export const StatusCrmTableRecords: StatusType[] = [
		{
		  id: 1,
		  value: "Cao",
		  default: false,
		  display: "Ưu tiên cao",
		  description: "Những nhiệm vụ cần xử lý ngay lập tức để tránh ảnh hưởng nghiêm trọng.",
		  foreground: "#FFFFFF",
		  background: "#FF0000"
		},
		{
		  id: 2,
		  value: "Trung bình",
		  default: false,
		  display: "Ưu tiên trung bình",
		  description: "Những nhiệm vụ cần được giải quyết trong thời gian sớm.",
		  foreground: "#000000",
		  background: "#FFFF00"
		},
		{
		  id: 3,
		  value: "Thấp",
		  default: true,
		  display: "Ưu tiên thấp",
		  description: "Những nhiệm vụ không gấp, có thể xử lý sau.",
		  foreground: "#000000",
		  background: "#00FF00"
		},
		{
		  id: 4,
		  value: "Khẩn cấp",
		  default: false,
		  display: "Ưu tiên khẩn cấp",
		  description: "Nhiệm vụ cần được xử lý ngay lập tức để tránh thiệt hại lớn.",
		  foreground: "#FFFFFF",
		  background: "#FF4500"
		},
		{
		  id: 5,
		  value: "Bình thường",
		  default: false,
		  display: "Mức ưu tiên bình thường",
		  description: "Nhiệm vụ không yêu cầu thời gian xử lý cụ thể, có thể hoàn thành khi tiện.",
		  foreground: "#000000",
		  background: "#E0E0E0"
		},
		{
		  id: 6,
		  value: "Quan trọng",
		  default: false,
		  display: "Ưu tiên quan trọng",
		  description: "Nhiệm vụ cần được chú ý nhưng không phải là gấp nhất.",
		  foreground: "#FFFFFF",
		  background: "#1E90FF"
		},
		{
		  id: 7,
		  value: "Đặc biệt",
		  default: false,
		  display: "Ưu tiên đặc biệt",
		  description: "Nhiệm vụ chỉ dành riêng cho các trường hợp hoặc sự kiện đặc thù.",
		  foreground: "#FFFFFF",
		  background: "#800080"
		},
		{
		  id: 8,
		  value: "Thử nghiệm",
		  default: false,
		  display: "Ưu tiên thử nghiệm",
		  description: "Nhiệm vụ trong giai đoạn thử nghiệm hoặc không yêu cầu chính thức.",
		  foreground: "#000000",
		  background: "#B0C4DE"
		},
		{
		  id: 9,
		  value: "Tạm hoãn",
		  default: false,
		  display: "Ưu tiên tạm hoãn",
		  description: "Nhiệm vụ không cần thực hiện ngay, có thể hoãn lại khi cần thiết.",
		  foreground: "#000000",
		  background: "#D3D3D3"
		},
		{
		  id: 10,
		  value: "Tối đa",
		  default: false,
		  display: "Ưu tiên tối đa",
		  description: "Nhiệm vụ cấp bách nhất, cần được ưu tiên hàng đầu và không được trì hoãn.",
		  foreground: "#FFFFFF",
		  background: "#8B0000"
		}
	  	  
]