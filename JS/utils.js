/**
 * GOLD POUCH - UTILITY FUNCTIONS
 * Helper functions for common tasks
 */

// -------- DOM UTILITIES --------
const DOM = {
    // Select single element
    select: (selector) => document.querySelector(selector),

    // Select multiple elements
    selectAll: (selector) => document.querySelectorAll(selector),

    // Get element by ID
    byId: (id) => document.getElementById(id),

    // Create element
    create: (tag, classes = '') => {
        const element = document.createElement(tag);
        if (classes) element.className = classes;
        return element;
    },

    // Add class
    addClass: (element, className) => {
        if (element) element.classList.add(className);
    },

    // Remove class
    removeClass: (element, className) => {
        if (element) element.classList.remove(className);
    },

    // Toggle class
    toggleClass: (element, className) => {
        if (element) element.classList.toggle(className);
    },

    // Set HTML content
    html: (element, content) => {
        if (element) element.innerHTML = content;
    },

    // Set text content
    text: (element, content) => {
        if (element) element.textContent = content;
    },

    // Show element
    show: (element) => {
        if (element) element.style.display = 'block';
    },

    // Hide element
    hide: (element) => {
        if (element) element.style.display = 'none';
    }
};

// -------- STRING UTILITIES --------
const Strings = {
    // Capitalize first letter
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),

    // Slugify string
    slugify: (str) => {
        return str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    },

    // Truncate string
    truncate: (str, length = 50) => {
        return str.length > length ? str.substring(0, length) + '...' : str;
    },

    // Format currency
    formatCurrency: (amount, currency = 'USD') => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(amount);
    },

    // Format date
    formatDate: (date, format = 'MMM DD, YYYY') => {
        const d = new Date(date);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = d.getDate();
        const month = months[d.getMonth()];
        const year = d.getFullYear();
        return format.replace('MMM', month).replace('DD', day).replace('YYYY', year);
    }
};

// -------- ARRAY UTILITIES --------
const Arrays = {
    // Shuffle array
    shuffle: (arr) => {
        const newArr = [...arr];
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    },

    // Get random item
    random: (arr) => arr[Math.floor(Math.random() * arr.length)],

    // Chunk array
    chunk: (arr, size) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    },

    // Remove duplicates
    unique: (arr) => [...new Set(arr)],

    // Find by property
    findBy: (arr, prop, value) => arr.find(item => item[prop] === value),

    // Filter by property
    filterBy: (arr, prop, value) => arr.filter(item => item[prop] === value)
};

// -------- STORAGE UTILITIES --------
const Storage = {
    // Save to localStorage
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },

    // Get from localStorage
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Storage error:', e);
            return null;
        }
    },

    // Remove from localStorage
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },

    // Clear all localStorage
    clear: () => {
        try {
            localStorage.clear();
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    }
};

// -------- VALIDATION UTILITIES --------
const Validation = {
    // Email validation
    isEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Phone validation (US format)
    isPhone: (phone) => {
        const phoneRegex = /^\d{10}$|^1?\d{10}$|^\+1\d{10}$/;
        return phoneRegex.test(phone.replace(/\D/g, ''));
    },

    // URL validation
    isUrl: (url) => {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    },

    // Check if string is empty
    isEmpty: (str) => str.trim().length === 0,

    // Validate password strength
    validatePassword: (password) => {
        return {
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasNumbers: /\d/.test(password),
            hasSpecialChar: /[!@#$%^&*]/.test(password),
            isLongEnough: password.length >= 8
        };
    }
};

// -------- EVENT UTILITIES --------
const Events = {
    // Listen for event
    on: (element, event, callback) => {
        if (element) element.addEventListener(event, callback);
    },

    // Remove event listener
    off: (element, event, callback) => {
        if (element) element.removeEventListener(event, callback);
    },

    // Trigger custom event
    emit: (element, eventName, data = {}) => {
        const event = new CustomEvent(eventName, { detail: data });
        if (element) element.dispatchEvent(event);
    },

    // Debounce function
    debounce: (func, delay = 300) => {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    },

    // Throttle function
    throttle: (func, delay = 300) => {
        let lastCall = 0;
        return function(...args) {
            const now = new Date().getTime();
            if (now - lastCall >= delay) {
                func(...args);
                lastCall = now;
            }
        };
    }
};

// -------- HTTP UTILITIES --------
const HTTP = {
    // Fetch with error handling
    fetch: async (url, options = {}) => {
        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    },

    // GET request
    get: async (url) => {
        return HTTP.fetch(url, { method: 'GET' });
    },

    // POST request
    post: async (url, data) => {
        return HTTP.fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }
};

// -------- ANIMATION UTILITIES --------
const Animations = {
    // Fade in element
    fadeIn: (element, duration = 300) => {
        element.style.opacity = '0';
        element.style.transition = `opacity ${duration}ms`;
        setTimeout(() => { element.style.opacity = '1'; }, 10);
    },

    // Fade out element
    fadeOut: (element, duration = 300) => {
        element.style.transition = `opacity ${duration}ms`;
        element.style.opacity = '0';
    },

    // Scroll to element
    scrollTo: (element, behavior = 'smooth') => {
        element.scrollIntoView({ behavior, block: 'start' });
    },

    // Slide down
    slideDown: (element, duration = 300) => {
        element.style.maxHeight = '0px';
        element.style.overflow = 'hidden';
        element.style.transition = `max-height ${duration}ms`;
        setTimeout(() => {
            element.style.maxHeight = element.scrollHeight + 'px';
        }, 10);
    }
};

// -------- LOGGER UTILITIES --------
const Logger = {
    // Log info
    info: (message, data = null) => {
        console.log(`%c[INFO]%c ${message}`, 'color: #00A8FF; font-weight: bold;', '', data || '');
    },

    // Log success
    success: (message, data = null) => {
        console.log(`%c[SUCCESS]%c ${message}`, 'color: #00D084; font-weight: bold;', '', data || '');
    },

    // Log warning
    warn: (message, data = null) => {
        console.warn(`%c[WARNING]%c ${message}`, 'color: #FFA500; font-weight: bold;', '', data || '');
    },

    // Log error
    error: (message, data = null) => {
        console.error(`%c[ERROR]%c ${message}`, 'color: #FF4444; font-weight: bold;', '', data || '');
    }
};

// -------- MATH UTILITIES --------
const Math2 = {
    // Random number between min and max
    random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,

    // Clamp value between min and max
    clamp: (value, min, max) => Math.max(min, Math.min(max, value)),

    // Calculate percentage
    percentage: (value, total) => (value / total) * 100,

    // Round to decimal places
    round: (value, decimals = 2) => Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
};

// -------- COLOR UTILITIES --------
const Colors = {
    // Convert HEX to RGB
    hexToRgb: (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    },

    // Convert RGB to HEX
    rgbToHex: (r, g, b) => {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
};

// -------- EXPORT ALL UTILITIES --------
window.GoldPouch = {
    DOM,
    Strings,
    Arrays,
    Storage,
    Validation,
    Events,
    HTTP,
    Animations,
    Logger,
    Math: Math2,
    Colors
};

Logger.success('Gold Pouch Utilities loaded successfully!');
