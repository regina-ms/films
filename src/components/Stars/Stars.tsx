import React from "react";

type StarsProps = {
    count: number,
};

export default function Stars({ count }: StarsProps) {
    const starsArray = [];
    for (let i = 1; i <= count; i++) {
        starsArray.push(i)
    }

    return (
        <ul className="card-body-stars">
            {
                isValid(count) && starsArray.map((el) => <li key={el}><Star/></li>)
            }
        </ul>
    )
}

function Star() {
    return (
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
            <path d="M0 0h18v18H0z" fill="none" />
        </svg>
    )
}

const isValid = (count: number) => {
    const min = 1;
    const max = 5;
    return count >= min && count <= max ? true : false
}