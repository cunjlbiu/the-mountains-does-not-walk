import palmL from '../../assets/palmL.png'
import palmR from '../../assets/palmR.png'
import compass from '../../assets/compass.png'
import photos from '../../assets/photos.png'
import rtL from '../../assets/rtL.png'
import hta from '../../assets/hta.png'
import rtR from '../../assets/rtR.png'
import canon from '../../assets/canon.png'
import {Link} from 'react-router-dom'
import { HiOutlineTicket, HiOutlineBanknotes } from "react-icons/hi2";
import { MdOutlineLocalHotel } from "react-icons/md";
import { TbMoodBoy } from "react-icons/tb"
import { SlPresent } from "react-icons/sl";
import { RiVipCrown2Line } from "react-icons/ri";
import { BsPassport } from "react-icons/bs";
import './Home.css'

const Home = () => {
    return (
        <div className='homeLayout'>
            <img className='appear' src={rtR} alt="" style={{position:'absolute', right:'0', top:'120px', animationDelay:'1.1s'}}/>
            <img className='appear' src={rtL} alt="" style={{position:'absolute', left:'0', top:'45px', animationDelay:'0.5s'}}/>
            <img className='slideL' src={palmL} alt="" style={{position:'absolute', left:'0', top:'0'}}/>
            <img className='slideR' src={palmR} alt="" style={{position:'absolute', right:'0', top:'0'}}/>
            <img className='appear scale' src={hta} alt="" style={{position:'absolute', right:'655px', top:'400px', animationDelay:'1.5s'}}/>
            <img className='appear scale' src={canon} alt="" style={{position:'absolute', right:'520px', top:'-60px', animationDelay:'1.2s'}}/>
            <img className='appear scale' src={compass} alt="" style={{position:'absolute', left:'370px', top:'290px', animationDelay:'0.8s'}}/>
            <img className='appear scale' src={photos} alt="" style={{position:'absolute', left:'400px', top:'-55px', animationDelay:'1s'}}/>
            <div className='sliderContainer'>
                <div className="tv-image-slider tv-moduleid-9969222"></div>
            </div>
            <div className='aboutContainer slideUp' >
                
                <div className='aboutText'>
                    <p className='aboutTitle'>О нас</p>
                    СТА Трэвел — это команда людей,  фанатично увлеченных путешествиями.
                    <br />
                    Уже 17 лет мы сами путешествуем по миру и организуем для вас лучший отдых!
                    Мы  лично посетили более 90  стран и каждый  ваш отпуск мы организовываем, как свой. Досконально изучаем все страны, курорты, отели, знаем все нюансы,  чтобы при всем многообразии выбрать именно то, что подойдет именно вам!
                    <br />
                    Нам очень важно, чтобы на отдыхе вы получили только положительные эмоции.  За 17 лет работы  мы отправили на отдых десятки тысяч туристов, которые обращаются к нам снова и советуют нас своим друзьям!
                    <br />
                    Главный принцип нашей работы-честность, открытость  и высокий профессионализм! Самое важное для нас-это доверие клиентов и наша репутация.
                    Неважно в каком городе вы живете — мы работаем со всеми городами России, оплата производится дистанционно по QR коду, все документы приходят вам на электронную почту, либо всегда будем рады видеть вас в наших офисах.
                </div>
            <br />
            </div>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3d6086f86246f62b4ffbfdeadf0b5799f8ff856741712c110ea767c14d699935&amp;source=constructor" width="100%" height="485" frameborder="0"></iframe>
            <div className='offerBox'>
                <div className='offerCard'>
                    <MdOutlineLocalHotel className='icon'/>
                    <div>Бронирование пакетных туров, отелей</div>
                </div>
                <div className='offerCard'>
                    <TbMoodBoy className='icon'/>
                    <div>Детские лагеря, языковые школы</div>
                </div>
                <div className='offerCard'>
                    <HiOutlineBanknotes className='icon'/>
                    <div>Оформление туров в кредит и рассрочку</div>
                </div>
                <div className='offerCard'>
                    <RiVipCrown2Line className='icon'/>
                    <div>Организация индивидуальных и ВИП туров</div>
                </div>
                <div className='offerCard'>
                    <BsPassport className='icon'/>
                    <div>Оформление виз</div>
                </div>
                <div className='offerCard'>
                    <SlPresent className='icon'/>
                    <div>Подарочные сертификаты</div>
                </div>
                <div className='offerCard'>
                    <HiOutlineTicket className='icon'/>
                    <div>Авиа/жд билеты</div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Home;
