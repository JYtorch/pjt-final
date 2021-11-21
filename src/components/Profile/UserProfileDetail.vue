<template>
  <div class="form-style-1 user-pro" action="#">
    <!-- <form action="#" class="user"> -->
      <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Full Name</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              Kenneth Valdez
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Followings</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              0
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Followers</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              0
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Email</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              fip@jukmuh.al
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Phone</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              (239) 816-9029
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Mobile</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              (320) 380-4539
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Address</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              Bay Area, San Francisco, CA
            </div>
          </div>
          <hr>
  
        </div>
      <!-- <h4 style="font-size: 30px;">Profile details</h4>
      <div class="row">
        <div class="col-md-6 form-it">
          <label>Username : <span style="font-size: 20px;">edwardkennedy</span></label>
          
        </div>
        <div class="col-md-6 form-it">
          <label>Email Address</label>
          <input type="text" placeholder="edward@kennedy.com">
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 form-it">
          <label>First Name</label>
          <input type="text" placeholder="Edward ">
        </div>
        <div class="col-md-6 form-it">
          <label>Last Name</label>
          <input type="text" placeholder="Kennedy">
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 form-it">
          <label>Country</label>
          <select>
            <option value="united">United States</option>
            <option value="saab">Others</option>
          </select>
        </div>
        <div class="col-md-6 form-it">
          <label>State</label>
          <select>
            <option value="united">New York</option>
            <option value="saab">Others</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <input class="submit" type="submit" value="save">
        </div>
      </div>	 -->
    <!-- </form> -->
    <!-- <form action="#" class="password">
      <h4>02. Change password</h4>
      <div class="row">
        <div class="col-md-6 form-it">
          <label>Old Password</label>
          <input type="text" placeholder="**********">
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 form-it">
          <label>New Password</label>
          <input type="text" placeholder="***************">
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 form-it">
          <label>Confirm New Password</label>
          <input type="text" placeholder="*************** ">
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <input class="submit" type="submit" value="change">
        </div>
      </div>	
    </form> -->
  </div>
</template>

<script>
export default {
  name: 'UserProfileDetail'
}
</script>

<style>
body{
    margin-top:20px;
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;    
}
.main-body {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}
.h-100 {
    height: 100%!important;
}
.shadow-none {
    box-shadow: none!important;
}
</style>