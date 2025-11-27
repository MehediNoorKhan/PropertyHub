
import Banner from './Banner'
import FeaturedProperties from './FeaturedProperties'
import ChooseProperty from './ChooseProperty'
import GuestReviews from './GuestReviews'
import ReviewChatModal from './ReviewChatModal'
import { useEffect } from 'react'


export default function Home() {
    useEffect(() => {
        document.title = "Home | GuestPro";
    }, []);
    return (
        <div>
            <Banner></Banner>
            <FeaturedProperties></FeaturedProperties>
            <ChooseProperty></ChooseProperty>
            <div>
                <GuestReviews></GuestReviews>
            </div>
            <ReviewChatModal></ReviewChatModal>
        </div>
    )
}