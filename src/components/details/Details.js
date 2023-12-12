import React from 'react';
import './Details.css'
import { imageBag } from '../../Const';

const Details = () => {
  return (
    <div className='details-box'>
        <div className='details-box-one'>
            <p className='details-box-one-hd'><i className='i-color'>We are pizza makers,</i> and our mission is to make cool pizza which feeds all your senses</p>
        </div>
        <div className='details-box-two'>
            <div className='details-box-two-left'>
                <div className='left-para'>Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Nunc consequat interdum varius sit amet. Tincidunt dui ut ornare lectus sit amet est placerat. Suspendisse potenti nullam ac tortor vitae purus faucibus. Faucibus nisl tincidunt eget nullam non.</div>
                <div className='left-para'>Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Et egestas quis ipsum suspendisse ultrices gravida. Consequat nisl vel pretium lectus.</div>
                <div className='count-para'>
                    <div className='count-one'>
                        <i className='i-color'>01</i>
                        <span>Vulputate eu scelerisque felis imperdiet proin</span>
                    </div>
                    <div className='count-one'>
                        <i className='i-color'>02</i>
                        <span>Porta nibh venenatis cras sed felis eget velit</span>
                    </div>
                    <div className='count-one'>
                        <i className='i-color'>03</i>
                        <span>Ipsum consequat nisl vel pretium lectus quam id</span>
                    </div>
                    <div className='count-one'>
                        <i className='i-color'>04</i>
                        <span>Nibh mauris cursus mattis molestie a iaculis</span>
                    </div>
                    <div className='count-one'>
                        <i className='i-color'>05</i>
                        <span>Dolor magna eget est lorem ipsum dolor sit</span>
                    </div>
                    <div className='count-one'>
                        <i className='i-color'>06</i>
                        <span>Mattis pellentesque id nibh tortor id aliquet</span>
                    </div>
                    <div className='count-one'>
                        <i className='i-color'>07</i>
                        <span>Vulputate eu scelerisque felis imperdiet proin</span>
                    </div>
                    <div className='count-one'>
                        <i className='i-color'>08</i>
                        <span>Mattis pellentesque id nibh tortor id aliquet</span>
                    </div>
                </div>
            </div>
            <div className='details-box-two-right'>
                <img src={imageBag.plate_pizza} alt='pizza-plate' className='pizza-plate' />
            </div>
        </div>
    </div>
  )
}

export default Details