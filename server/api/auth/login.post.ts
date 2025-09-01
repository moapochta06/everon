// server/api/auth/login.post.ts
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { username, password } = body;

    console.log('Login attempt:', { username, password });
    console.log('Env credentials:', { 
      adminUser: process.env.ADMIN_USERNAME,
      hasAdminPass: !!process.env.ADMIN_PASSWORD 
    });

    // Проверяем credentials из .env
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminUsername || !adminPassword) {
      console.error('Admin credentials not set in .env');
      throw createError({
        statusCode: 500,
        message: 'Server configuration error'
      });
    }

    if (username === adminUsername && password === adminPassword) {
      // Успешная аутентификация
      const user = {
        id: 1,
        username: adminUsername,
        isAdmin: true
      };

      // Устанавливаем cookie
      setCookie(event, 'auth-token', 'authenticated', {
        httpOnly: true,
        maxAge: 86400, // 24 часа
        path: '/'
      });

      return {
        success: true,
        user: { 
          id: user.id, 
          username: user.username
        } 
      };
    }

    // Неверные credentials
    throw createError({
      statusCode: 401,
      message: 'Неверные учетные данные'
    });

  } catch (error) {
    console.error('Login error:', error);
    
    
    throw createError({
      statusCode: 500,
      message: 'Internal server error'
    });
  }
});
// import { db } from '~/db'
// import { users, type InsertUser } from '~/db/schema'
// import { eq } from 'drizzle-orm'
// import bcrypt from 'bcryptjs'

// export default defineEventHandler(async (event) => {
//   try {
//     const body = await readBody(event)
//     const { username, password } = body

//     // Проверка пароля из .env
//     const adminPassword = process.env.ADMIN_PASSWORD
//     if (username === 'admin' && password === adminPassword) {
//       // Хешируем пароль
//       const hashedPassword = await bcrypt.hash(password, 12)
      
//       // Создаем объект с правильным типом, включая email
//       const userData: InsertUser = {
//         username: username,
//         password: hashedPassword
//       }

//       // Проверяем существование пользователя
//       const existingUsers = await db.select()
//         .from(users)
//         .where(eq(users.username, username))

//       if (existingUsers.length > 0) {
//         // Обновляем пароль
//         await db.update(users)
//           .set({ password: hashedPassword })
//           .where(eq(users.username, username))
//       } else {
//         // Создаем нового пользователя
//         await db.insert(users).values(userData)
//       }

//       setCookie(event, 'auth-token', 'admin-authenticated', {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         maxAge: 60 * 60 * 24 * 7,
//       })

//       return { success: true }
//     }

//     throw createError({
//       statusCode: 401,
//       statusMessage: 'Неверные учетные данные',
//     })
//   } catch (error) {
//     console.error('Login error:', error)
//     throw createError({
//       statusCode: 500,
//       statusMessage: 'Ошибка сервера',
//     })
//   }
// })