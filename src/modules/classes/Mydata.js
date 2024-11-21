// export const mydata=[
//     {
//       "id": 1,
//       "userId": 1,
//       "date": "2020-03-02T00:00:00.000Z",
//       "products": [
//         {
//           "productId": 1,
//           "quantity": 4
//         },
//         {
//           "productId": 2,
//           "quantity": 1
//         },
//         {
//           "productId": 3,
//           "quantity": 6
//         }
//       ],
//       "__v": 0
//     },
//     {
//       "id": 2,
//       "userId": 1,
//       "date": "2020-01-02T00:00:00.000Z",
//       "products": [
//         {
//           "productId": 2,
//           "quantity": 4
//         },
//         {
//           "productId": 1,
//           "quantity": 10
//         },
//         {
//           "productId": 5,
//           "quantity": 2
//         }
//       ],
//       "__v": 0
//     },
//     {
//       "id": 3,
//       "userId": 2,
//       "date": "2020-03-01T00:00:00.000Z",
//       "products": [
//         {
//           "productId": 1,
//           "quantity": 2
//         },
//         {
//           "productId": 9,
//           "quantity": 1
//         }
//       ],
//       "__v": 0
//     },
//     {
//       "id": 4,
//       "userId": 3,
//       "date": "2020-01-01T00:00:00.000Z",
//       "products": [
//         {
//           "productId": 1,
//           "quantity": 4
//         }
//       ],
//       "__v": 0
//     },
//     {
//       "id": 5,
//       "userId": 3,
//       "date": "2020-03-01T00:00:00.000Z",
//       "products": [
//         {
//           "productId": 7,
//           "quantity": 1
//         },
//         {
//           "productId": 8,
//           "quantity": 1
//         }
//       ],
//       "__v": 0
//     },
//     {
//       "id": 6,
//       "userId": 4,
//       "date": "2020-03-01T00:00:00.000Z",
//       "products": [
//         {
//           "productId": 10,
//           "quantity": 2
//         },
//         {
//           "productId": 12,
//           "quantity": 3
//         }
//       ],
//       "__v": 0
//     },
//     {
//       "id": 7,
//       "userId": 8,
//       "date": "2020-03-01T00:00:00.000Z",
//       "products": [
//         {
//           "productId": 18,
//           "quantity": 1
//         }
//       ],
//       "__v": 0
//     }
//   ]

export const mydata = Array.from({ length: 1000 }, (_, index) => {
    // Generating random userId between 1 and 10
    const userId = Math.floor(Math.random() * 10) + 1;
  
    // Generating random products with productId between 1 and 20, and random quantities
    const products = Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => {
      const productId = Math.floor(Math.random() * 20) + 1; // Random productId between 1 and 20
      const quantity = Math.floor(Math.random() * 10) + 1; // Random quantity between 1 and 10
      return { productId, quantity };
    });
  
    // Random date between 2020-01-01 and 2020-12-31
    const randomDate = new Date(2020, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString();
  
    return {
      id: index + 1, // Sequential ID
      userId,
      date: randomDate,
      products,
      __v: 0,
    };
  });
  