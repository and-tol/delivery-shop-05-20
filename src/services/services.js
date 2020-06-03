export const getData = async function (url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url} Статус ошибки ${response.status}`);
  }
  // console.log('response.json()',(await response).json())
  return await response.json();
};


// const url = './../../data/partners.json';

// getData(url)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

export class DBService {
  getData = async (url) => {
    const res = await fetch(url)
     if (res.ok) {
       return res.json()
     } else {
       throw Error(`Не удалось получить данные по адресу ${url}. Ошибка ${res.status}`);
     }
  }

  getPartnersData = () => {
    return this.getData('data/partners.json')
  }
}
