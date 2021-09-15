import * as React from 'react'
import { Svg } from './styles'
import { Link } from 'react-router-dom'

export const Logo = (props) => {
  return (
    <Link to='/'>
      <Svg
        width={368.309}
        height={122.021}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='65.846 13.989 368.309 122.021'
        style={{
          background: '0 0'
        }}
        preserveAspectRatio='xMidYMid'
        {...props}
      >
        <defs>
          <linearGradient
            id='prefix__editing-gradient-gradient'
            x1={0}
            x2={1}
            y1={0.5}
            y2={0.5}
            gradientUnits='objectBoundingBox'
          >
            <stop offset={0} stopColor='#008dff' />
            <stop offset={1} stopColor='#a200ff' />
          </linearGradient>
        </defs>
        <path
          d='M14.34 0H.38l8.13-42.24h14.08L14.34 0zm36.73 1.28q-7.74 0-7.74-6.02.06-1.66.57-4.48l1.16-5.88q1.72-8.32 1.72-10.18 0-3.71-2.17-3.71-3.65 0-5.57 9.53L35.26 0 22.4 1.28l6.66-33.98 10.49-1.22-1.02 6.27q3.01-6.27 12.22-6.27 4.48 0 6.37 1.89 1.89 1.89 1.89 6.11 0 3.97-2.05 13.25Q56-8.51 56-6.94q0 1.56.86 2.46.87.9 2.15 1.02-.64 2.18-2.85 3.46-2.21 1.28-5.09 1.28zm32.19-23.74q.9-2.37.9-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44-1.32 1.44-1.32 3.24 0 1.28 1.03 2.3 1.47 1.41 5.25 3.71 3.77 2.31 5.21 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.24 2.37-3.48 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.82-1.47 4.51-1.47 2.69 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.59 4.22 1.53 0 2.56-.96 1.02-.96 1.02-2.62 0-3.26-5.5-6.72-4.48-2.94-5.51-4.1-1.73-2.04-1.73-4.6 0-2.56 1.22-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.46 1.67 2.46 4.48 0 2.82-1.69 4.42-1.7 1.6-4.77 1.6-2.11 0-3.14-.7zm13 16.06q0-1.73.89-6.08l3.39-17.28h-3.77l.25-1.92q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h5l-.58 2.88h-4.93l-3.26 17.28q-.83 3.97-.83 5.31 0 3.07 2.68 3.71-.64 2.18-2.94 3.46-2.3 1.28-5.57 1.28-3.26 0-5.12-2.05-1.85-2.05-1.85-5.63zm24.6 4.48q-1.5-1.66-2.17-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.95-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.87.9 2.15 1.02-.64 2.18-2.98 3.46-2.34 1.28-4.96 1.28t-4.38-.99q-1.76-.99-2.28-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.08 1.02-2.92 0-5.28-.77-2.37-.77-3.88-2.43zm13.51-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.69 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.57 1.08 1.6 1.08 2.04 0 3.55-1.95 1.5-1.95 2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.5.51q-.93.51-1.66 1.67zM188.1-4.38q-2.69 2.72-6.37 4.19-3.68 1.47-7.33 1.47t-4.93-.64l-1.98 10.88-12.99 1.28 8.83-45.44 10.43-1.09-.83 4.42q2.69-4.55 8.25-4.55 6.28 0 9.6 4.04 2.95 3.64 2.95 9.21t-1.47 9.54q-1.48 3.97-4.16 6.69zm-14.47-17.96l-3.39 18.76q1.34 1.15 3.01 1.15 1.66 0 2.62-.64.96-.64 1.67-1.92 1.92-3.46 3.45-13.95.45-3.08.45-6.08 0-3.01-.67-3.97-.67-.96-1.95-.96-3.91 0-5.19 7.61zm49.86 11.52q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.21 1.53-3.2 2.56-4.09 2.11-8.51 2.11t-7.01-.96q-2.59-.96-4.32-2.75-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.25 1.66-.25 3.07 0 2.95 1.31 4.07t3.74 1.12q2.44 0 5.03-1.12 2.59-1.12 3.68-2.92zm-13.06-6.97q4.55 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.54-.8-1.63-.8-1.09 0-2.02.42-.93.42-1.89 1.82-2.36 3.2-3.71 10.63zM232.64-6.4q0-1.73.9-6.08l3.39-17.28h-3.78l.26-1.92q7.68-2.3 15.1-7.94h3.07l-1.53 6.98h4.99l-.58 2.88h-4.92l-3.27 17.28q-.83 3.97-.83 5.31 0 3.07 2.69 3.71-.64 2.18-2.95 3.46-2.3 1.28-5.56 1.28-3.27 0-5.12-2.05-1.86-2.05-1.86-5.63z'
          fill='url(#prefix__editing-gradient-gradient)'
          transform='translate(123.532 102.512)'
        />
        <style />
      </Svg>
    </Link>
  )
}
