import React, { useState } from 'react';
// import { NotificationContainer, NotificationManager } from "react-notifications"
import { useDispatch, useSelector } from 'react-redux';

const DanhGia = () => {
    const dispatch = useDispatch();
    const userComment = useSelector((state) => state.detail.comment);
    const startComment = useSelector((state) => state.detail.listStar);
    const [rate, setRate] = useState(0)

    const renderStar = (star) => {
        let div =[];
        let i = 0
        while (i < star) {
            i++;
            div.push(<i class="fa fa-star-o" aria-hidden="true"></i>);
        }
        return div.map(item=>{
            return(<span>{item}</span>)
        });
    }
    const renderCommentUser = () => {
        return userComment && userComment.map((item)=>{
            return(
                <div>
                    <div>{item.user}</div>
                    {renderStar(item.star)}
                    <div>{item.comment}</div>
                </div>
            )
        }) 
    }
    const onClickStar = (index) => {
        setRate(index)
    }
    
    const renderStarComment = () => {
        return startComment && startComment.map((item, index) =>{
            let isActive =false;
            if (index <= rate) {
                isActive = true
            }

            return(
                <span key={item.id} style={{color: isActive ? 'yellow' : null}} onClick={()=>onClickStar(index)}><i class="fa fa-star-o" aria-hidden="true"></i></span>
            )
        })
    }

    const onClickPostComment = () =>{
        const credentialStr = JSON.parse(localStorage.getItem("credentials"));
        const star = rate +1;
        if(credentialStr){
            dispatch(
                {
                    type: "EDIT-COMMENT",
                    payload: {user:credentialStr.hoTen,star:star,comment:'Phim quá đã :))'},
                }
            )
        }
    }

        return (
            <div>
                <div data-toggle="modal" data-target="#myModal">Commen Cảm xuc</div>

                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div style={{marginBottom:'2%',borderBottom:'none'}} className="modal-header">
                                <div>
                                    {renderStarComment()}
                                </div>
                                <button type="button" className="close btn-close" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body">
                                <input type='textarea' className='danh-gia-phim' placeholder="Comment cảm xúc về phim đi nào :)"></input>
                            </div>
                            <div className="modal-footer">
                                <button className='dang-binhluan' 
                                onClick={()=>onClickPostComment()}
                                variant="contained" color="primary" 
                                style={{ outline: "none" }} 
                                type="submit">Đăng</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {renderCommentUser()}
                </div>
            </div>
        )
}

export default DanhGia
