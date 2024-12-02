export const deviceDataAccess = {
  labels: [
    "06:00",
    "08:00",
    "10:00",
    "12:00",
    "14:00",
    "16:00",
    "18:00",
    "20:00",
    "22:00",
    "00:00",
    "02:00",
    "04:00",
  ],
  datasets: [
    {
      label: "Desktop Users",
      data: [50, 120, 200, 300, 250, 400, 500, 700, 600, 350, 200, 100],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Mobile Users",
      data: [30, 80, 150, 250, 300, 350, 450, 600, 500, 300, 150, 80],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
    },
    {
      label: "Tablet Users",
      data: [20, 50, 100, 150, 200, 250, 300, 400, 300, 180, 120, 60],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
    {
      label: "Others",
      data: [10, 20, 30, 40, 50, 60, 80, 100, 90, 50, 30, 20],
      backgroundColor: "rgba(153, 102, 255, 0.5)",
    },
  ],
};

export const transactionData = {
    labels: [
      "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00",
      "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00",
      "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
    ],
    datasets: [
      {
        label: "Purchase",
        data: [5, 3, 2, 4, 6, 8, 12, 20, 40, 60, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Top-up",
        data: [2, 1, 0, 3, 5, 7, 15, 25, 30, 50, 70, 85, 95, 105, 110, 115, 125, 130, 140, 150, 155, 160, 170, 180],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Transfer",
        data: [0, 1, 0, 2, 3, 5, 10, 20, 25, 40, 60, 75, 80, 85, 90, 95, 100, 110, 120, 130, 135, 140, 150, 160],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: "Withdrawal",
        data: [0, 0, 1, 2, 3, 4, 8, 10, 15, 20, 30, 40, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 110],
        backgroundColor: "rgba(153, 102, 255, 0.5)",
      },
    ],
  };


  export const RevenueAndFinanceData = {
    labels: [
      "Doanh thu bán hàng", "Doanh thu từ dịch vụ", "Doanh thu từ quảng cáo",
      "Doanh thu từ hợp đồng", "Doanh thu từ đầu tư tài chính", "Doanh thu từ online marketing",
      "Chi phí vận hành", "Chi phí nhân sự", "Chi phí logistics", "Chi phí khuyến mãi",
      "Chi phí marketing", "Chi phí thuê văn phòng", "Chi phí bảo trì hệ thống",
      "Chi phí điện nước", "Chi phí hỗ trợ khách hàng", "Chi phí nghiên cứu phát triển (R&D)",
      "Chi phí bảo hiểm", "Doanh thu từ bán sản phẩm kỹ thuật số", "Doanh thu từ hội thảo",
      "Lợi nhuận khác"
    ],
    datasets: [
      {
        data: [300000, 150000, 100000, 70000, 50000, 80000, 60000, 90000, 50000, 40000,
               30000, 45000, 20000, 15000, 30000, 25000, 10000, 70000, 35000, 15000],
        backgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF",
          "#FF9F40", "#E7E9ED", "#FF6384", "#36A2EB", "#FFCE56",
          "#4BC0C0", "#9966FF", "#FF9F40", "#E7E9ED", "#FF6384",
          "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#E7E9ED"
        ],
        hoverBackgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF",
          "#FF9F40", "#E7E9ED", "#FF6384", "#36A2EB", "#FFCE56",
          "#4BC0C0", "#9966FF", "#FF9F40", "#E7E9ED", "#FF6384",
          "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#E7E9ED"
        ],
      },
    ],
  };

export const systemPerformanceData = {
    labels: [
      "Tốc độ phản hồi (ms)", "Tỷ lệ lỗi (%)", "Số yêu cầu mỗi giây (req/s)", 
      "Băng thông sử dụng (Mbps)", "Thời gian hoạt động (Uptime) (%)", "Dung lượng bộ nhớ (GB)",
      "CPU sử dụng (%)", "Số lượng phiên người dùng", "Thời gian tải trung bình (s)",
      "Số lỗi 500 (lỗi máy chủ)", "Số lỗi 404 (lỗi không tìm thấy)", "Tỷ lệ thành công (%)",
      "Thời gian thực hiện giao dịch (ms)", "Số lượng dịch vụ đang chạy", "Tốc độ xử lý dữ liệu (MB/s)"
    ],
    datasets: [
      {
        data: [200, 1.5, 1200, 50, 99.9, 16, 45, 300, 2.3, 10, 15, 98, 450, 20, 8],
        backgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40",
          "#E7E9ED", "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF",
          "#FF9F40", "#E7E9ED", "#FF6384"
        ],
        hoverBackgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40",
          "#E7E9ED", "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF",
          "#FF9F40", "#E7E9ED", "#FF6384"
        ],
      },
    ],
  };
  
  
