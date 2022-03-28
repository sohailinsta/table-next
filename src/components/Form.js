import React from 'react'
import "./Form.css";
/*import Modaltwo from './Modaltwo';*/
/*import Modal from './Modal';*/
import { useState } from 'react';
import "./Modaltwo.css";
import { FcApproval } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";

export default function Form() {

  /*const handleChange = (e) => {   let get = e.target.value 
  console.log(get)
  }*/

/*const [openModal, setOpenModal] = useState(false);*/
/*const [modal, setModal] = useState(false);

   const toggleModal = () => {
    setModal(!modal);
  };*/


  return (
    <div className="container-table">        
        <table className="table table-hover table-bordered border-dark">
  <thead className="background-color">
    <tr className="border-dark">
      {/*<th scope="col">#</th>*/}
      <th scope="col" className="candidate-name">Candidate Name</th>
      <th scope="col" className="job-id">Job-Id  </th>
      {/*<th scope="col" className="company-name">Company name status</th>*/}
      <th scope="col" className="client">Client poc </th>
      <th scope="col" className="assigned">Assigned </th>
      <th scope="col" className="verified">Verified </th>
      <th scope="col" className="forwarded">Forwarded by Client team</th>
      <th scope="col" className="rejected-by-client">Rejected by Client</th>
      <th scope="col" className="round-1">Scheduled Round 1</th>
      <th scope="col" className="round-1-result">Round 1 result</th>
      <th scope="col" className="round-2">Scheduled Round 2</th>
      <th scope="col" className="round-2-result">Round 2 result</th>
      <th scope="col" className="round-3">Scheduled Round 3</th>
      <th scope="col" className="round-3-result">Round 3 result</th>
      <th scope="col" className="selected">Selected </th>
      <th scope="col" className="rejected">Rejected </th>
    </tr>
  </thead>
  <tbody className="text-back-color change-color">
    <tr className="table-background-color">
      {/*<th scope="row">1</th>*/}
      <td className="sohail">sohail</td>
      <td><select className="dropdown" /*onChange={(e) => handleChange(e)}*/>
  <option value="J_12943">J_12943</option>
  <option value="J_22344">J_22344</option>
  <option selected value="J_12345">J_12345</option>
  <option value="J_12948">J_12948</option>
</select></td>
      {/*<td className="dxc">DXC</td>*/}
      <td className="assigned-yes">server</td>
      <td className="assigned-yes">yes</td>
      <td className="dxc">01/03/2022 {/*<FcApproval/>*/} <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="forwarded-yes dxc">10/9/2022</td>
      <td className="dxc">No</td>
      <td className="dxc">04/03/2022  5:30-6:30   <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">Selected <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">04/03/2022 2:30-3:30  <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc">pending <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc">04/03/2022 5:30-6:30 <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc">pending <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc">no

    

      {/*<button onClick={toggleModal} className="btn-modal">
        Open
  </button>*/}
      {/*<button className="btn-primary border-reason" onClick={()=>{
        setOpenModal(true);
      }}>
      Reason
      </button>
    {openModal && <Modal closeModal={setOpenModal}/>}*/}
    {/*modal && <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
  </div>*/}
      </td>
      <td className="dxc">yes
      <button type="button" class="btn btn-primary btn-reason" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <div className="font-reason">reason</div>
</button>

<div class="modal fade container" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Candidate not prepared
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </td>
    </tr>
    <tr className="table-background-color">
      {/*<th scope="row">2</th>*/}
      <td className="sohail">vikas</td>
      <td><select className="dropdown">
  <option value="grapefruit">J_12943</option>
  <option value="lime">J_22344</option>
  <option selected value="coconut">J_12345</option>
  <option value="mango">J_12948</option>
</select></td>
      {/*<td className="dxc">tcs</td>*/}
      <td className="assigned-yes">data</td>
      <td className="assigned-yes">no</td>
      <td className="dxc">01/03/2022 <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="forwarded-yes dxc">03/03/2022</td>
      <td className="dxc">yes</td>
      <td className="dxc">04/03/2022  5:30-6:30  <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc"> selected<img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">04/03/2022 2:30-3:30  <img className="pending-set" src="https://png.pngtree.com/png-vector/20200224/ourmid/pngtree-colorful-loading-icon-png-image_2152960.jpg" alt="selected"/></td>
      <td className="dxc">Selected <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">04/03/2022 5:30-6:30 <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">Selected <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">yes

      <button type="button" class="btn btn-primary btn-reason" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <div className="font-reason">reason</div>
</button>

<div class="modal fade container" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Impressive resume
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


      </td>
      <td className="dxc">no</td>
    </tr>
    <tr className="table-background-color">
      {/*<th scope="row">3</th>*/}
      <td className="sohail">rahul</td>
      <td><select className="dropdown">
  <option value="grapefruit">J_12943</option>
  <option value="lime">J_22344</option>
  <option selected value="coconut">J_12345</option>
  <option value="mango">J_12948</option>
</select></td>
      {/*<td className="dxc">accenture</td>*/}
      <td className="assigned-yes">config</td>
      <td className="assigned-yes">no</td>
      <td className="dxc">01/03/2022 <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="forwarded-yes dxc">03/03/2022</td>
      <td className="dxc">yes</td>
      <td className="dxc">04/03/2022  5:30-6:30 <p className="cancel-icon"> <FcCancel/> </p>  {/*<img className="rejected-set" src="https://png.pngtree.com/png-vector/20190618/ourmid/pngtree-true-and-false-symbols-accept-rejected-for-evaluation-vector-simple-png-image_1502129.jpg" alt="rejected"/>*/}</td>
      <td className="dxc"> pending <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc">04/13/2022 4:30-5:30 <p className="cancel-icon"> <FcCancel/> </p> {/*<img className="rejected-set" src="https://png.pngtree.com/png-vector/20190618/ourmid/pngtree-true-and-false-symbols-accept-rejected-for-evaluation-vector-simple-png-image_1502129.jpg" alt="rejected"/>*/}</td>
      <td className="dxc">rejected <p className="cancel-icon"> <FcCancel/> </p> {/*<img className="rejected-set" src="https://png.pngtree.com/png-vector/20190618/ourmid/pngtree-true-and-false-symbols-accept-rejected-for-evaluation-vector-simple-png-image_1502129.jpg" alt="rejected"/>*/}</td>
      <td className="dxc">04/07/2022 4:30-5:30 <p className="cancel-icon"> <FcCancel/> </p> {/*<img className="rejected-set" src="https://png.pngtree.com/png-vector/20190618/ourmid/pngtree-true-and-false-symbols-accept-rejected-for-evaluation-vector-simple-png-image_1502129.jpg" alt="rejected"/>*/}</td>
      <td className="dxc">rejected <p className="cancel-icon"> <FcCancel/> </p> {/*<img className="rejected-set" src="https://png.pngtree.com/png-vector/20190618/ourmid/pngtree-true-and-false-symbols-accept-rejected-for-evaluation-vector-simple-png-image_1502129.jpg" alt="rejected"/>*/}</td>
      <td className="dxc">no</td>
      <td className="dxc">yes
      <button type="button" class="btn btn-primary btn-reason" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <div className="font-reason">reason</div>
</button>

<div class="modal fade container" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Inattentive Listening
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </td>
    </tr>
    <tr className="table-background-color">
      {/*<th scope="row">4</th>*/}
      <td className="sohail">amit</td>
      <td><select className="dropdown">
  <option value="grapefruit">J_12943</option>
  <option value="lime">J_22344</option>
  <option selected value="coconut">J_12345</option>
  <option value="mango">J_12948</option>
</select></td>
      {/*<td className="dxc">wipro</td>*/}
      <td className="assigned-yes">web</td>
      <td className="assigned-yes">no</td>
      <td className="dxc">01/03/2022 <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="forwarded-yes dxc">03/03/2022</td>
      <td className="dxc">yes</td>
      <td className="dxc">04/03/2022  5:30-6:30 <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc">pending <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc">04/03/2022 2:30-3:30  <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc"> rejected <p className="cancel-icon"> <FcCancel/> </p> {/*<img className="rejected-set" src="https://png.pngtree.com/png-vector/20190618/ourmid/pngtree-true-and-false-symbols-accept-rejected-for-evaluation-vector-simple-png-image_1502129.jpg" alt="rejected"/>*/}</td>
      <td className="dxc">04/07/2022 4:30-5:30 <p className="cancel-icon"> <FcCancel/> </p> {/*<img className="rejected-set" src="https://png.pngtree.com/png-vector/20190618/ourmid/pngtree-true-and-false-symbols-accept-rejected-for-evaluation-vector-simple-png-image_1502129.jpg" alt="rejected"/>*/}</td>
      <td className="dxc">rejected <p className="cancel-icon"> <FcCancel/> </p> {/*<img className="rejected-set" src="https://png.pngtree.com/png-vector/20190618/ourmid/pngtree-true-and-false-symbols-accept-rejected-for-evaluation-vector-simple-png-image_1502129.jpg" alt="rejected"/>*/}</td>
      <td className="dxc">no</td>
      <td className="dxc">yes
      <button type="button" class="btn btn-primary btn-reason" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <div className="font-reason">reason</div>
</button>

<div class="modal fade container" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      communication was not upto the mark.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </td>
    </tr>
    <tr className="table-background-color">
      {/*<th scope="row">5</th>*/}
      <td className="sohail">nikhil</td>
      <td><select className="dropdown">
  <option value="grapefruit">J_12943</option>
  <option value="lime">J_22344</option>
  <option selected value="coconut">J_12345</option>
  <option value="mango">J_12948</option>
</select></td>
      {/*<td className="dxc">infosys</td>*/}
      <td className="assigned-yes">data</td>
      <td className="assigned-yes">yes</td>
      <td className="dxc">01/03/2022 <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">03/03/2022</td>
      <td className="dxc">no</td>
      <td className="dxc">04/03/2022  5:30-6:30 <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">Selected <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">04/03/2022 2:30-3:30 <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc">pending <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc">04/03/2022 5:30-6:30 <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc">pending <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc">yes
      <button type="button" class="btn btn-primary btn-reason" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <div className="font-reason">reason</div>
</button>

<div class="modal fade container" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Enthusiasm and initiative
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </td>
      <td className="dxc">no</td>
    </tr>
    <tr className="table-background-color">
      {/*<th scope="row">5</th>*/}
      <td className="sohail">nikhil</td>
      <td><select className="dropdown">
  <option value="grapefruit">J_12943</option>
  <option value="lime">J_22344</option>
  <option selected value="coconut">J_12345</option>
  <option value="mango">J_12948</option>
</select></td>
      {/*<td className="dxc">infosys</td>*/}
      <td className="assigned-yes">data</td>
      <td className="assigned-yes">yes</td>
      <td className="dxc">01/03/2022 <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">03/03/2022</td>
      <td className="dxc">no</td>
      <td className="dxc">04/03/2022  5:30-6:30 <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">Selected <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">04/03/2022 2:30-3:30 <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc">pending <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc">04/03/2022 5:30-6:30 <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc">pending <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc">yes
      <button type="button" class="btn btn-primary btn-reason" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <div className="font-reason">reason</div>
</button>

<div class="modal fade container" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Enthusiasm and initiative
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </td>
      <td className="dxc">no</td>
    </tr>
    <tr className="table-background-color"> 
      {/*<th scope="row">7</th>*/}
      <td className="sohail">dikshit</td>
      <td><select className="dropdown">
  <option value="grapefruit">J_12943</option>
  <option value="lime">J_22344</option>
  <option selected value="coconut">J_12345</option>
  <option value="mango">J_12948</option>
</select></td>
      {/*<td className="dxc">cognizent</td>*/}
      <td className="assigned-yes">web</td>
      <td className="assigned-yes">no</td>
      <td className="dxc">01/03/2022 <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="forwarded-yes dxc">03/03/2022</td>
      <td className="dxc">yes</td>
      <td className="dxc">04/03/2022  5:30-6:30 <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">Selected <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">04/03/2022 2:30-3:30 <img className="pending-set" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pending-2820831-2340793.png" alt="selected"/></td>
      <td className="dxc">Selected <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">04/03/2022 5:30-6:30 <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">Selected <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">no</td>
      <td className="dxc">yes
      <button type="button" class="btn btn-primary btn-reason" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <div className="font-reason">reason</div>
</button>

<div class="modal fade container" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      poor online presence
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </td>
    </tr>
    <tr className="table-background-color">
      {/*<th scope="row">8</th>*/}
      <td className="sohail">rohit</td>
      <td><select className="dropdown">
  <option value="grapefruit">J_12943</option>
  <option value="lime">J_22344</option>
  <option selected value="coconut">J_12345</option>
  <option value="mango">J_12948</option>
</select></td>
      {/*<td className="dxc">wipro</td>*/}
      <td className="assigned-yes">data</td>
      <td className="assigned-yes">yes</td>
      <td className="dxc">01/03/2022 <img className="verified-set" src="https://www.citypng.com/public/uploads/preview/blue-round-circle-badge-verified-tick-mark-icon-21635270904irlimm0pwl.png" alt="selected"/></td>
      <td className="dxc">03/03/2022</td>
      <td className="dxc">no</td>
      <td className="dxc">04/03/2022  5:30-6:30 <p className="cancel-icon"> <FcCancel/> </p> {/*<img className="rejected-set" src="https://png.pngtree.com/png-vector/20190618/ourmid/pngtree-true-and-false-symbols-accept-rejected-for-evaluation-vector-simple-png-image_1502129.jpg" alt="rejected"/>*/}</td>
      <td className="dxc">rejected <p className="cancel-icon"> <FcCancel/> </p> {/*<img className="rejected-set" src="https://png.pngtree.com/png-vector/20190618/ourmid/pngtree-true-and-false-symbols-accept-rejected-for-evaluation-vector-simple-png-image_1502129.jpg" alt="rejected"/>*/}</td>
      <td className="dxc">04/03/2022 2:30-3:30 <p className="cancel-icon"> <FcCancel/> </p> {/*<img className="rejected-set" src="https://png.pngtree.com/png-vector/20190618/ourmid/pngtree-true-and-false-symbols-accept-rejected-for-evaluation-vector-simple-png-image_1502129.jpg" alt="rejected"/>*/}</td>
      <td className="dxc">rejected <p className="cancel-icon"> <FcCancel/> </p> {/*<img className="rejected-set" src="https://png.pngtree.com/png-vector/20190618/ourmid/pngtree-true-and-false-symbols-accept-rejected-for-evaluation-vector-simple-png-image_1502129.jpg" alt="rejected"/>*/}</td>
      <td className="dxc">04/03/2022 5:30-6:30 <p className="cancel-icon"> <FcCancel/> </p> {/*<img className="rejected-set" src="https://png.pngtree.com/png-vector/20190618/ourmid/pngtree-true-and-false-symbols-accept-rejected-for-evaluation-vector-simple-png-image_1502129.jpg" alt="rejected"/>*/}</td>
      <td className="dxc">rejected <p className="cancel-icon"> <FcCancel/> </p> {/*<img className="rejected-set" src="https://png.pngtree.com/png-vector/20190618/ourmid/pngtree-true-and-false-symbols-accept-rejected-for-evaluation-vector-simple-png-image_1502129.jpg" alt="rejected"/>*/}</td>
      <td className="dxc">yes
      <button type="button" class="btn btn-primary btn-reason" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <div className="font-reason">reason</div>
</button>

<div class="modal fade container" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Relevant work experience
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </td>
      <td className="dxc">no</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}
