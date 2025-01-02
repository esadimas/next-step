# API Documentation 

## Tech Stack
- Nodejs (runtime)
- sequelize pg (ORM)

## Base URL

`http://localhost:3000/api`

---

## Authentication Middleware

- **Header:**
  - `Authorization: Bearer <token>`
- **Description:** Protects routes by ensuring the user is authenticated.
- **Error Response:**

```json
{
    "error": "Unauthorized access. Token is missing or invalid."
}
```
**Status Code:** `401 Unauthorized`

---

## Users

### 1. Get All Users (Admin Only)

**Endpoint:** `GET /users`

**Headers:**

- `Authorization: Bearer <admin_token>`

**Success Response:**

```json
[
    {
        "id": 1,
        "name": "Lisa",
        "email": "lisa@mail.com",
        "role": "customer",
        "created_at": "2025-01-01T00:00:00.000Z"
    },
    {
        "id": 2,
        "name": "Admin User",
        "email": "admin@mail.com",
        "role": "admin",
        "created_at": "2025-01-01T00:00:00.000Z"
    }
]
```
**Status Code:** `200 OK`

**Error Responses:**

```json
{
    "error": "Unauthorized. Admin privileges required."
}
```
**Status Code:** `403 Forbidden`

### 2. Register User

**Endpoint:** `POST /users/register`

**Request Body:**

```json
{
    "name": "Jennie",
    "email": "jennie@mail.com",
    "password": "password123"
}
```

**Success Response:**

```json
{
    "message": "User registered successfully."
}
```
**Status Code:** `201 Created`

**Error Responses:**

```json
{
    "error": "Email is already in use."
}
```
**Status Code:** `409 Conflict`

### 3. Login User

**Endpoint:** `POST /users/login`

**Request Body:**

```json
{
    "email": "jennie@mail.com",
    "password": "password123"
}
```

**Success Response:**

```json
{
    "token": "eyJhbGciexample..."
}
```
**Status Code:** `200 OK`

**Error Responses:**

```json
{
    "error": "Invalid email or password."
}
```
**Status Code:** `401 Unauthorized`

### 4. Get User Profile

**Endpoint:** `GET /profile`

**Headers:**

- `Authorization: Bearer <user_token>`

**Success Response:**

```json
{
    "id": 1,
    "name": "Jisoo",
    "email": "jisoo@mail.com",
    "role": "customer",
    "created_at": "2025-01-01T00:00:00.000Z"
}
```
**Status Code:** `200 OK`

**Error Responses:**

```json
{
    "error": "Unauthorized access. Token is invalid."
}
```
**Status Code:** `401 Unauthorized`

### 5. Update User Profile

**Endpoint:** `PUT /profile`

**Headers:**

- `Authorization: Bearer <user_token>`

**Request Body:**

```json
{
    "name": "Jisoo cantik Updated",
    "password": "newpassword123"
}
```

**Success Response:**

```json
{
    "id": 1,
    "name": "Jisoo cantik Updated",
    "email": "jisoo@example.com",
    "role": "customer",
    "created_at": "2025-01-01T00:00:00.000Z"
}
```
**Status Code:** `200 OK`

**Error Responses:**

```json
{
    "error": "Unauthorized access. Token is invalid."
}
```
**Status Code:** `401 Unauthorized`

### 6. Delete User (Admin Only)

**Endpoint:** `DELETE /users/:id`

**Headers:**

- `Authorization: Bearer <admin_token>`

**Success Response:**

```json
{
    "message": "User deleted successfully."
}
```
**Status Code:** `200 OK`

**Error Responses:**

```json
{
    "error": "User not found."
}
```
**Status Code:** `404 Not Found`

```json
{
    "error": "Unauthorized. Admin privileges required."
}
```
**Status Code:** `403 Forbidden`

---

## Products

### 1. Get All Products

**Endpoint:** `GET /products`

**Success Response:**

```json
[
    {
        "id": 1,
        "name": "Smartphone X",
        "description": "High-end smartphone",
        "price": 999,
        "stock": 50,
        "imageUrls": [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg"
        ],
        "created_at": "2025-01-01T00:00:00.000Z"
    }
]
```
**Status Code:** `200 OK`

**Error Responses:**

```json
{
    "error": "Products not found."
}
```
**Status Code:** `404 Not Found`

### 2. Get Product by ID

**Endpoint:** `GET /products/:id`

**Success Response:**

```json
{
    "id": 1,
    "name": "Smartphone X",
    "description": "High-end smartphone",
    "price": 999,
    "stock": 50,
    "imageUrls": [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg"
    ],
    "created_at": "2025-01-01T00:00:00.000Z"
}
```
**Status Code:** `200 OK`

**Error Responses:**

```json
{
    "error": "Product not found."
}
```
**Status Code:** `404 Not Found`

### 3. Create Product (Admin Only)

**Endpoint:** `POST /products`

**Headers:**

- `Authorization: Bearer <admin_token>`

**Request Body:**

```json
{
    "name": "Smartphone X",
    "description": "High-end smartphone",
    "price": 999,
    "stock": 50,
    "imageUrls": [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg"
    ]
}
```

**Success Response:**

```json
{
    "id": 1,
    "name": "Smartphone X",
    "description": "High-end smartphone",
    "price": 999,
    "stock": 50,
    "imageUrls": [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg"
    ],
    "created_at": "2025-01-01T00:00:00.000Z"
}
```
**Status Code:** `201 Created`

**Error Responses:**

```json
{
    "error": "Invalid product data."
}
```
**Status Code:** `400 Bad Request`

### 4. Update Product (Admin Only)

**Endpoint:** `PUT /products/:id`

**Headers:**

- `Authorization: Bearer <admin_token>`

**Request Body:**

```json
{
    "name": "Smartphone X Updated",
    "price": 899
}
```

**Success Response:**

```json
{
    "id": 1,
    "name": "Smartphone X Updated",
    "description": "High-end smartphone",
    "price": 899,
    "stock": 50,
    "imageUrls": [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg"
    ],
    "created_at": "2025-01-01T00:00:00.000Z"
}
```
**Status Code:** `200 OK`

**Error Responses:**

```json
{
    "error": "Product not found."
}
```
**Status Code:** `404 Not Found`

### 5. Delete Product (Admin Only)

**Endpoint:** `DELETE /products/:id`

**Headers:**

- `Authorization: Bearer <admin_token>`

**Success Response:**

```json
{
    "message": "Product deleted successfully."
}
```
**Status Code:** `200 OK`

**Error Responses:**

```json
{
    "error": "Product not found."
}
```
**Status Code:** `404 Not Found`

---

## Orders

### 1. Get All Orders (Admin Only)

**Endpoint:** `GET /orders`

**Headers:**

- `Authorization: Bearer <admin_token>`

**Success Response:**

```json
[
    {
        "id": 1,
        "user_id": 1,
        "status": "pending",
        "total": 999,
        "created_at": "2025-01-01T00:00:00.000Z"
    }
]
```
**Status Code:** `200 OK`

**Error Responses:**

```json
{
    "error": "Unauthorized. Admin privileges required."
}
```
**Status Code:** `403 Forbidden`

### 2. Create Order

**Endpoint:** `POST /orders`

**Request Body:**

```json
{
    "products": [
        { "id": 1, "quantity": 2 }
    ]
}
```

**Success Response:**

```json
{
    "id": 1,
    "user_id": 1,
    "status": "pending",
    "total": 1998,
    "created_at": "2025-01-01T00:00:00.000Z"
}
```
**Status Code:** `201 Created`

**Error Responses:**

```json
{
    "error": "Invalid product data or insufficient stock."
}
```
**Status Code:** `400 Bad Request`

### 3. Update Order Status (Admin Only)

**Endpoint:** `PUT /orders/:id`

**Headers:**

- `Authorization: Bearer <admin_token>`

**Request Body:**

```json
{
    "status": "shipped"
}
```

**Success Response:**

```json
{
    "id": 1,
    "user_id": 1,
    "status": "shipped",
    "total": 1998,
    "created_at": "2025-01-01T00:00:00.000Z"
}
```
**Status Code:** `200 OK`

**Error Responses:**

```json
{
    "error": "Order not found."
}
```
**Status Code:** `404 Not Found`



