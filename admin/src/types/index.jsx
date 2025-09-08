/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {number} price
 * @property {number} [originalPrice]
 * @property {string} image
 * @property {string} description
 * @property {string} category
 * @property {number} rating
 * @property {number} reviews
 * @property {string} [badge]
 * @property {boolean} inStock
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} BlogPost
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} image
 * @property {string} category
 * @property {string} author
 * @property {string} [badge]
 * @property {string} content
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} ContactQuery
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {number} [phone]
 * @property {string} subject
 * @property {string} message
 * @property {'new'|'responded'|'resolved'} status
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {number} phone
 * @property {string} password
 * @property {'admin'|'user'} role
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} AuthState
 * @property {boolean} isAuthenticated
 * @property {User|null} user
 */
