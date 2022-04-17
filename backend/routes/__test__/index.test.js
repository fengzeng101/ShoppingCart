const app = require('../../app');
const request = require('supertest');

describe('get products testing', () => {
  it('returns products when we call the URL', async () => {
    const res = await request(app).get('/products')
      .expect("Content-Type",/json/)
      .expect(200)
      .then((response)=>{
          expect(response.body).toEqual(
              expect.arrayContaining([
                  expect.objectContaining({
                      name:expect.any(String),
                      image:expect.any(String),
                  }),
              ])
          );
      });
  }); 
 });

describe('shipping fee testing', () => {
  it('returns 10 if the order price is less then A$50', async () => {
    const res = await request(app).get('/shipping/20');
    expect(res.body.shipping).toEqual(10);
  });

  it('returns 20 if the order price is greate then A$50', async () => {
    const res = await request(app).get('/shipping/60');
    expect(res.body.shipping).toEqual(20);
  });
 });


describe('order testing group', () => {
  it('returns 200 if the order send', async () => {
    const res = await request(app).post('/order').send({ name: 'Sydney' });
    expect(res.statusCode).toEqual(200);
  });

  it('returns correct message if the order is empty', async () => {
    const res = await request(app).post('/order').send();
    expect(res.body.message).toEqual("We need a order value!");
  });

 });