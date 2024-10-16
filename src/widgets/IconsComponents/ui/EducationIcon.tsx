import React from 'react'

interface IconProps {
  isActive: boolean
}

export const EducationIcon: React.FC<IconProps> = ({ isActive }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 21 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={isActive ? '#DBB157' : '#7C7C7C'}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.57374 27.2495C1.89555 27.2495 1.32973 27.0228 0.876298 26.5694C0.422862 26.1159 0.195653 25.5501 0.194672 24.8719V3.12759C0.194672 2.45038 0.42188 1.88506 0.876298 1.43163C1.33072 0.97819 1.89653 0.750981 2.57374 0.75H18.4278C19.105 0.75 19.6708 0.977209 20.1252 1.43163C20.5797 1.88604 20.8064 2.45186 20.8054 3.12907V24.8719C20.8054 25.5491 20.5787 26.1149 20.1252 26.5694C19.6718 27.0238 19.1055 27.2505 18.4263 27.2495H2.57374ZM10.5 11.2261L13.4444 9.46981L16.3888 11.2261V2.22219H10.5V11.2261Z"
      />
    </svg>
  )
}
