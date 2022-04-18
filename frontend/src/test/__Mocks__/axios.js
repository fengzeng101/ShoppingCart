import products from "./products"

const mockResponse = {
    data:{
        results: products
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}