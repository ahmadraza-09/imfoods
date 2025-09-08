const STORAGE_KEYS = {
    PRODUCTS: 'admin_products',
    BLOGS: 'admin_blogs',
    CONTACTS: 'admin_contacts',
    USERS: 'admin_users',
    AUTH: 'admin_auth'
};

// Initialize default data
const initializeDefaultData = () => {
    // Default admin user
    const defaultUsers = [
        {
            id: '1',
            name: 'Admin User',
            email: 'admin@imfoods.com',
            phone: 1234567890,
            password: 'admin123', // In production, this should be hashed
            role: 'admin',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    ];

    // Sample products
    const defaultProducts = [
        {
            id: '1',
            name: 'Premium Basmati Rice',
            price: 299,
            originalPrice: 349,
            image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=500',
            description: 'Premium quality aged basmati rice with authentic aroma and taste.',
            category: 'Rice & Grains',
            rating: 4.8,
            reviews: 156,
            badge: 'Best Seller',
            inStock: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: '2',
            name: 'Organic Quinoa',
            price: 599,
            image: 'https://images.pexels.com/photos/1339960/pexels-photo-1339960.jpeg?auto=compress&cs=tinysrgb&w=500',
            description: 'Certified organic quinoa packed with protein and nutrients.',
            category: 'Health Foods',
            rating: 4.6,
            reviews: 89,
            badge: 'New',
            inStock: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    ];

    // Sample blog posts
    const defaultBlogs = [
        {
            id: '1',
            title: 'Benefits of Organic Foods',
            description: 'Discover the amazing health benefits of choosing organic foods for your family.',
            image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
            category: 'Health & Nutrition',
            author: 'Im Foods',
            badge: 'Featured',
            content: `# Benefits of Organic Foods

Organic foods have gained tremendous popularity in recent years, and for good reason. Here are some key benefits:

## Health Benefits
- **No harmful pesticides**: Organic foods are grown without synthetic pesticides and chemicals
- **Higher nutritional value**: Studies show organic foods often contain higher levels of vitamins and minerals
- **Better taste**: Many people find organic foods taste better and fresher

## Environmental Benefits
- **Sustainable farming**: Organic farming practices help preserve soil health
- **Biodiversity**: Supports local ecosystems and wildlife
- **Reduced pollution**: Less chemical runoff into water systems

## Why Choose Im Foods?
At Im Foods, we source only the finest organic products to ensure you and your family get the best nutrition possible.`,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    ];

    // Sample contact queries
    const defaultContacts = [
        {
            id: '1',
            name: 'John Smith',
            email: 'john@example.com',
            phone: 9876543210,
            subject: 'Product Inquiry',
            message: 'Hello, I would like to know more about your organic product range.',
            status: 'new',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    ];

    // Initialize data if not exists
    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(defaultUsers));
    }
    if (!localStorage.getItem(STORAGE_KEYS.PRODUCTS)) {
        localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(defaultProducts));
    }
    if (!localStorage.getItem(STORAGE_KEYS.BLOGS)) {
        localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(defaultBlogs));
    }
    if (!localStorage.getItem(STORAGE_KEYS.CONTACTS)) {
        localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(defaultContacts));
    }
};

// Storage utilities
export const storage = {
    init: initializeDefaultData,

    // Products
    getProducts: () => {
        const data = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
        return data ? JSON.parse(data) : [];
    },

    saveProducts: (products) => {
        localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    },

    // Blogs
    getBlogs: () => {
        const data = localStorage.getItem(STORAGE_KEYS.BLOGS);
        return data ? JSON.parse(data) : [];
    },

    saveBlogs: (blogs) => {
        localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(blogs));
    },

    // Contacts
    getContacts: () => {
        const data = localStorage.getItem(STORAGE_KEYS.CONTACTS);
        return data ? JSON.parse(data) : [];
    },

    saveContacts: (contacts) => {
        localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(contacts));
    },

    // Users
    getUsers: () => {
        const data = localStorage.getItem(STORAGE_KEYS.USERS);
        return data ? JSON.parse(data) : [];
    },

    saveUsers: (users) => {
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    },

    // Auth
    getAuth: () => {
        const data = localStorage.getItem(STORAGE_KEYS.AUTH);
        return data ? JSON.parse(data) : { isAuthenticated: false, user: null };
    },

    saveAuth: (auth) => {
        localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(auth));
    },

    clearAuth: () => {
        localStorage.removeItem(STORAGE_KEYS.AUTH);
    }
};
