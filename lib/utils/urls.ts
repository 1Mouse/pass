// export const isProduction = process.env.NODE_ENV === 'production'
// export const isDevelopment = process.env.NODE_ENV === 'development'

// export const FRONT_URL = isProduction
//     ? 'https://pass-1mouse.vercel.app'
//     : isDevelopment
//         ? 'http://localhost:3000'
//         : 'http://localhost:3000'

// export const API_URL = isProduction ?'http://ec2-34-207-95-142.compute-1.amazonaws.com/api/v1':
//     isDevelopment ?'http://localhost:8080/api/v1':
//         'http://localhost:8080/api/v1'

export const isProduction = process.env.NODE_ENV === 'production'
export const isDevelopment = process.env.NODE_ENV === 'development'

export const FRONT_URL = isProduction
    ? 'http://ec2-34-239-108-221.compute-1.amazonaws.com:3000/'
    : isDevelopment
        ? 'http://localhost:3000'
        : 'http://localhost:3000'

export const API_URL = isProduction ? 'http://ec2-34-207-95-142.compute-1.amazonaws.com/api/v1' :
    isDevelopment ? 'http://localhost:8080/api/v1' :
        'http://localhost:8080/api/v1'



