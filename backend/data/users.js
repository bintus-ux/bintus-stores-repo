import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Bintus Cal',
    email: 'bintus@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Chulox Sweetlife',
    email: 'sweetlife@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Eze Amilly',
    email: 'amilly@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
