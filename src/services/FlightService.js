export default class FlightService {
  _data = [
    {
      "id": 1,
      "from": "Санкт-Петербург",
      "to": "Москва",
      "time_departure": "20-05-2018 8:20",
      "time_arrival": "20-05-2018 9:20",
      "price": 40000,
      "laggage_max": 5,
      "duration": 3
    },
    {
      "id": 2,
      "from": "Санкт-Петербург",
      "to": "Москва",
      "time_departure": "21-05-2018 9:20",
      "time_arrival": "21-05-2018 10:20",
      "price": 50000,
      "laggage_max": 8,
      "duration": 3
    },
    {
      "id": 3,
      "from": "Санкт-Петербург",
      "to": "Москва",
      "time_departure": "22-05-2018 9:20",
      "time_arrival": "22-05-2018 10:20",
      "price": 60000,
      "laggage_max": 12,
      "duration": 3
    },
    {
      "id": 4,
      "from": "Париж",
      "to": "Лондон",
      "time_departure": "22-05-2018 9:20",
      "time_arrival": "22-05-2018 17:20",
      "price": 60000,
      "laggage_max": 12,
      "duration": 8
    },
    {
      "id": 5,
      "from": "Париж",
      "to": "Лондон",
      "time_departure": "22-05-2018 9:20",
      "time_arrival": "22-05-2018 17:20",
      "price": 20000,
      "laggage_max": 4,
      "duration": 8,
    },
    {
      "id": 6,
      "from": "Париж",
      "to": "Лондон",
      "time_departure": "10-05-2018 9:20",
      "time_arrival": "10-05-2018 17:20",
      "price": 65000,
      "laggage_max": 6,
      "duration": 8
    },
    {
      "id": 7,
      "from": "Вашингтон",
      "to": "Оттава",
      "time_departure": "22-05-2018 9:20", 
      "time_arrival": "22-05-2018 17:20", 
      "price": 60000,
      "laggage_max": 5,
      "duration": 15
    },
    {
      "id": 8,
      "from": "Вашингтон",
      "to": "Оттава",
      "time_departure": "10-05-2018 9:20",
      "time_arrival": "10-05-2018 17:20",
      "price": 50000,
      "laggage_max": 5,
      "duration": 16
    },
    {
      "id": 9,
      "from": "Вашингтон",
      "to": "Оттава",
      "time_departure": "22-05-2018 9:20",
      "time_arrival": "22-05-2018 17:20",
      "price": 90000,
      "laggage_max": 5,
      "duration": 16
    }
  ];

  getTickets(from, to, luggage) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          reject(new Error('Something went wrong'))
        } else {
          resolve(this.filterTickets(from, to, luggage));
        }
      }, 500);
    })
  }

  filterTickets(from, to, luggage) {
    // Отфильтровываем только соответствующие билеты
    const filteredTickets = this._data.slice().filter(item => {
      if (item.from.toLowerCase() === from.toLowerCase() 
          && item.to.toLowerCase() === to.toLowerCase()
          && item.laggage_max >= luggage) {
        return item;
      }
      return false;
    });

    return !filteredTickets.length ? [] : this.transformTickets(filteredTickets, luggage);
  }

  transformTickets(tickets, luggage) {
    return tickets.map(item => {
      item.luggage = luggage;
      return item;
    });
  }
}