import React from 'react';
import { Figure } from 'react-bootstrap';
import login from '../../images/loginNew.jpg';

function CustomFigure() {
    return (
        <div>
            <Figure>
                <div style={{ width: "20vw" }}>
                    <Figure.Caption>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum consectetur dolorem dicta tempore a laboriosam, impedit commodi voluptatibus dolore earum?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum consectetur dolorem dicta tempore a laboriosam, impedit commodi voluptatibus dolore earum?
                    </Figure.Caption>
                </div>
            </Figure>
        </div>
    )
}

export default CustomFigure