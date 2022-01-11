// Можно и так, но лучше разбивать на отдельные интерфейсы и переиспользовать их потом

interface userInt {
  userId: number;
  id: number;
  title: string;
  info: {
    desc: string;
    isActive: boolean;
  };
  tags: [
    {
      name: string;
      value: number;
    }
  ];
}


