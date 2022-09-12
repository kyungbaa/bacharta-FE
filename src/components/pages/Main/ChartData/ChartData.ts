import { faker } from "@faker-js/faker";
export const lineOptions = {
  responsive: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        font: {
          size: 15,
        },
      },
    },
    title: {
      display: true,
      text: "세계 나라의 환율 추이",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const lineData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "black",
      font: {
        size: 40,
      },
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
