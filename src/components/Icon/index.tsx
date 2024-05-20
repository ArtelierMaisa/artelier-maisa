import { CaretDown, CaretLeft, CaretRight, Copyright, FacebookLogo, Heart, InstagramLogo, MagnifyingGlass, SmileySad, WhatsappLogo, X } from "@phosphor-icons/react"
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr"
import React from "react"
import { IconProps } from "../../@types"
import { sizes } from "../../constants/components/Icon"

export function Icon(props: IconProps){
    const {
        color = "text",
        size = "xx-small", 
        variant
    } = props 

    const icons: Record < IconProps["variant"], JSX.Element > = {
        "caret-left": <CaretLeft />, 
        "caret-right": <CaretRight  />,
        "caret-down": <CaretDown />,
        "magnifying-glass": <MagnifyingGlass />,
        "heart": <Heart />,
        "facebook-logo": <FacebookLogo />,
        "instagram-logo": <InstagramLogo />,
        "whatsapp-logo": <WhatsappLogo />,
        "envelope-simple": <EnvelopeSimple />,
        "x": <X />,
        "smiley-sad": <SmileySad />,
        "copyright": <Copyright />
    }

    return React.cloneElement(icons[variant], { className: `${sizes[size]} text-${color}` }); 
}