"use client"
import React from 'react'
import {useSwiper} from 'swiper/react'
import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'
type Props = {
    containerStyles: string,
    btnStyles: string,
    iconsStyles: string,
    index: number,
    totalSlides: number
}


const WorkSliderButton = ({containerStyles, btnStyles, iconsStyles, index, totalSlides}: Props) => {
    const swiper = useSwiper()
    const handleNextSlide = () => {
        if (index === totalSlides - 1) {
            swiper.slideTo(0)
        } else {
            swiper.slideNext()
        }
    }

    const handlePrevSlide = () => {
        if (index === 0) {
            swiper.slideTo(totalSlides - 1) 
        } else {
            swiper.slidePrev()
        }
    }
  return (
    <div className={containerStyles}>
        <button className={btnStyles} onClick={handlePrevSlide}><PiCaretLeftBold className={iconsStyles} /></button>
        <button className={btnStyles} onClick={handleNextSlide}><PiCaretRightBold className={iconsStyles} /></button>
    </div>
  )
}

export default WorkSliderButton