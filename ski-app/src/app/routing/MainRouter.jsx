import {Route, Routes} from 'react-router-dom';
import ReservationSki from '../pages/ReservationSki';
import Detail  from '../pages/Detail';

const MainRouter = () => {
    return ( 
        <Routes>
            <Route path="/" element={<ReservationSki/>} />
            <Route path="/detail" element={<Detail />} />
        </Routes>
     );
}
 
export default MainRouter;