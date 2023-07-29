import main from "../../assets/Images/main2.png";
import upRectangle from "../../assets/Images/Rectangle 256.png";
import downRectangle from "../../assets/Images/Rectangle 257.png";

const Graphics = () => {
    return (
        <div style={{position: 'absolute'}}>
            <div style={{
                display: "inline-block",
                // padding: "20px"
            }}>
                <img
                    src={main}
                    alt="Our workplace"
                    className={`main-img ${window.innerWidth > 900 ? 'show' : ''}`}
                    style={{
                        zIndex: 10
                    }}
                />

                <img
                    src={upRectangle}
                    alt="Image 2"
                    className={`main-img ${window.innerWidth > 900 ? 'show' : ''}`}
                    style={{
                        top: '140px',
                        left: '50px',
                        zIndex: 2,
                    }}
                />

                <img
                    src={downRectangle}
                    alt="Image 2"
                    className={`main-img ${window.innerWidth > 900 ? 'show' : ''}`}
                    style={{
                        top: '-25px',
                        left: '-40px',
                        zIndex: 3,
                    }}
                />
            </div>
        </div>
    );
};

export default Graphics;
