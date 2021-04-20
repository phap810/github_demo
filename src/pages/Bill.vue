<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Suppliers list</h4>
              <p class="card-category">Here is a suppliers</p>

  <table class="table category">
    <thead>
      <slot name="columns">
        <tr>
          <th>ID</th>
          <th>Tên khách hàng</th>
          <th>Tổng tiền</th>
          <th>Phương thức thanh toán</th>
          <th>Ngày đặt</th>
          <th>Chú thích</th>
          <th>Trạng thái</th>
          <th>Action</th>
        </tr>
      </slot>
    </thead>
    <tbody>
      <tr v-for="bill in bill1.data" v-bind:key="bill.id">
        <td>{{ bill.id }}</td>
        <td>{{ bill.customer_id }}</td>
        <td>{{ bill.total }}</td>
        <td>{{ bill.payment }}</td>
        <td>0{{ bill.dateorder }}</td>
        <div v-if="bill.note == null">
        <td>null</td>
        </div>
        <div v-else>
        <td>{{ bill.note }}</td>
        </div>
        <td>
          <div v-if="bill.status == 1">
            <b-badge variant="success">Chờ xác nhận</b-badge>
          </div>
          <div v-else-if="bill.status == 2"><b-badge variant="danger">Đang vận chuyển</b-badge></div>
          <div v-else><b-badge variant="warning">Gửi thành công</b-badge></div>
        </td>
        <td>
          <b-button
            class="btn editcategory"
            variant="warning"
            v-b-modal.modal-edit
            @click="edit(bill.id)"
            >Check</b-button
          >
                    <b-button
            class="btn editcategory"
            variant="warning"
            v-b-modal.modal-edit
            @click="edit(bill.id)"
            >Hủy</b-button
          >
        </td>
      </tr>
    </tbody>
    <!-- Sửa -->
    <b-modal id="modal-edit" ref="modal" title="Edit supplier" @ok="handleOk">
      <form @submit.prevent="SubmitEdit">
        <b-form-group
          label="Category name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
                  <b-form-select v-model="formedit.category_id" 
          >
            <option v-for="category in listType.data" :key="category.id" :value="category.id">
              {{category.name}}
              </option>
          </b-form-select>
        </b-form-group>

        <b-form-group
          label="Supplier name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input id="name-input" v-model="formedit.name" required>
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="Supplier address"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input id="name-input" v-model="formedit.address" required>
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="Phone"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input id="name-input" v-model="formedit.phone" required>
          </b-form-input>
        </b-form-group>
        <b-form-group label="Status">
          <b-form-select
            v-model="formedit.status"
            :options="options"
          ></b-form-select>
        </b-form-group>
      </form>
    </b-modal>
  </table>
            </template>
            <template slot="header">
              <h4 class="card-title">Suppliers list</h4>
              <p class="card-category">Here is a suppliers</p>

  <table class="table category">
    <thead>
      <slot name="columns">
        <tr>
          <th>ID</th>
          <th>Tên khách hàng</th>
          <th>Tổng tiền</th>
          <th>Phương thức thanh toán</th>
          <th>Ngày đặt</th>
          <th>Chú thích</th>
          <th>Trạng thái</th>
          <th>Action</th>
        </tr>
      </slot>
    </thead>
    <tbody>
      <tr v-for="bill in bill1.data" v-bind:key="bill.id">
        <td>{{ bill.id }}</td>
        <td>{{ bill.customer_id }}</td>
        <td>{{ bill.total }}</td>
        <td>{{ bill.payment }}</td>
        <td>0{{ bill.dateorder }}</td>
        <div v-if="bill.note == null">
        <td>null</td>
        </div>
        <div v-else>
        <td>{{ bill.note }}</td>
        </div>
        <td>
          <div v-if="bill.status == 1">
            <b-badge variant="success">Active</b-badge>
          </div>
          <div v-else><b-badge variant="danger">Inactive</b-badge></div>
        </td>
        <td>
          <b-button
            class="btn editcategory"
            variant="warning"
            v-b-modal.modal-edit
            @click="edit(bill.id)"
            >Check</b-button
          >
                    <b-button
            class="btn editcategory"
            variant="warning"
            v-b-modal.modal-edit
            @click="edit(bill.id)"
            >Hủy</b-button
          >
        </td>
      </tr>
    </tbody>
    <!-- Sửa -->
    <b-modal id="modal-edit" ref="modal" title="Edit supplier" @ok="handleOk">
      <form @submit.prevent="SubmitEdit">
        <b-form-group
          label="Category name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
                  <b-form-select v-model="formedit.category_id" 
          >
            <option v-for="category in listType.data" :key="category.id" :value="category.id">
              {{category.name}}
              </option>
          </b-form-select>
        </b-form-group>

        <b-form-group
          label="Supplier name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input id="name-input" v-model="formedit.name" required>
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="Supplier address"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input id="name-input" v-model="formedit.address" required>
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="Phone"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input id="name-input" v-model="formedit.phone" required>
          </b-form-input>
        </b-form-group>
        <b-form-group label="Status">
          <b-form-select
            v-model="formedit.status"
            :options="options"
          ></b-form-select>
        </b-form-group>
      </form>
    </b-modal>
  </table>
            </template>
            <template slot="header">
              <h4 class="card-title">Suppliers list</h4>
              <p class="card-category">Here is a suppliers</p>

  <table class="table category">
    <thead>
      <slot name="columns">
        <tr>
          <th>ID</th>
          <th>Tên khách hàng</th>
          <th>Tổng tiền</th>
          <th>Phương thức thanh toán</th>
          <th>Ngày đặt</th>
          <th>Chú thích</th>
          <th>Trạng thái</th>
          <th>Action</th>
        </tr>
      </slot>
    </thead>
    <tbody>
      <tr v-for="bill in bill1.data" v-bind:key="bill.id">
        <td>{{ bill.id }}</td>
        <td>{{ bill.customer_id }}</td>
        <td>{{ bill.total }}</td>
        <td>{{ bill.payment }}</td>
        <td>0{{ bill.dateorder }}</td>
        <div v-if="bill.note == null">
        <td>null</td>
        </div>
        <div v-else>
        <td>{{ bill.note }}</td>
        </div>
        <td>
          <div v-if="bill.status == 1">
            <b-badge variant="success">Active</b-badge>
          </div>
          <div v-else><b-badge variant="danger">Inactive</b-badge></div>
        </td>
        <td>
          <b-button
            class="btn editcategory"
            variant="warning"
            v-b-modal.modal-edit
            @click="edit(bill.id)"
            >Check</b-button
          >
                    <b-button
            class="btn editcategory"
            variant="warning"
            v-b-modal.modal-edit
            @click="edit(bill.id)"
            >Hủy</b-button
          >
        </td>
      </tr>
    </tbody>
    <!-- Sửa -->
    <b-modal id="modal-edit" ref="modal" title="Edit supplier" @ok="handleOk">
      <form @submit.prevent="SubmitEdit">
        <b-form-group
          label="Category name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
                  <b-form-select v-model="formedit.category_id" 
          >
            <option v-for="category in listType.data" :key="category.id" :value="category.id">
              {{category.name}}
              </option>
          </b-form-select>
        </b-form-group>

        <b-form-group
          label="Supplier name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input id="name-input" v-model="formedit.name" required>
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="Supplier address"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input id="name-input" v-model="formedit.address" required>
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="Phone"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input id="name-input" v-model="formedit.phone" required>
          </b-form-input>
        </b-form-group>
        <b-form-group label="Status">
          <b-form-select
            v-model="formedit.status"
            :options="options"
          ></b-form-select>
        </b-form-group>
      </form>
    </b-modal>
  </table>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Swal from "sweetalert2";
Vue.use(VueAxios, axios);
export default {
  data() {
    return {
      listType: [],
      isEdit: false,
      bill1: [],
      formadd: {
        customer_id: "",
        total: "",
        payment: "",
        dateorder: null,
        note: 1,
        status:null
      },
      formedit: {
        id: "",
        customer_id: "",
        total: "",
        payment: "",
        dateorder: null,
        note: 1,
        status:null
      },
      options: [
        { value: 1, text: "Active" },
        { value: 2, text: "Inactive" }
      ]
    };
  },
  props: {
    columns: Array,
    data: Array
  },
  mounted() {},
  created() {
    this.getItem();
    this.getCate();
  },
  methods: {
    getItem() {
      var self = this;
      Vue.axios
        .get("http://127.0.0.1:8000/api/bill")
        .then(function(resp) {
          self.bill1 = resp.data;
          console.log("Data:", resp.data.data);
        })
        .catch(function(error) {
          console.log("Loi:", error);
        });
    },
    getCate() {
      var self = this;
      Vue.axios
        .get("http://127.0.0.1:8000/api/category")
        .then(function(resp) {
          self.listType = resp.data;
          console.log("Data:", resp.data.data);
          console.log("Thành công cate");
        })
        .catch(function(error) {
          console.log("Loi:", error);
        });
    },
    edit(id) {

      this.formedit.id = id;
      console.log("http://127.0.0.1:8000/api/bill/", id);
      axios
        .get("http://127.0.0.1:8000/api/bill/" + id)
        .then(res => {
          console.log("Thành công");
        })
        .catch(function(error) {
          console.log("lỗi:", error);
        });
    },
    handleOk(bvModalEvt) {
      var isEdit = this.formedit;
      axios
        .put("http://127.0.0.1:8000/api/supplier/" + isEdit.id, isEdit)
        .then(res => {
          console.log(res.data.data);
          this.getItem();
          console.log("thành công");
          Swal.fire("Đã sửa!", "Sửa supplier thành công.", "success");
        })
        .catch(function(error) {
          Swal.fire("Failed!", "Lỗi không sửa được", "warning");
        });
      bvModalEvt.preventDefault();
      this.$nextTick(() => {
        this.$bvModal.hide("modal-edit");
      });
    },
    handleAdd(bvModalEvt) {
      var isAdd = this.formadd;
      axios
        .post(`http://127.0.0.1:8000/api/supplier`, isAdd)
        .then(res => {
          this.getItem();
          console.log("Thành công");
          Swal.fire("Đã thêm!", "Thêm supplier thành công.", "success");
        })
        .catch(error => {
          this.getItem();
          Swal.fire("Failed!", "Lỗi không thêm được", "warning");
        });
      bvModalEvt.preventDefault();
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    }
  }
};
</script>
<style>
.editcategory {
  border: none;
  padding: 4px 12px;
  margin-left: 1px;
  background-color: #0e6de9;
}
.editcategory:hover {
  color: #212529;
  background-color: #0e6de9;
}
.editcategory:active {
  color: #212529;
  background-color: #189ce9 !important;
}
.b-submit {
  background-color: rgb(248, 23, 23);
  color: black;
  padding: 14px 10px;
  display: inline;
  cursor: pointer;
  border-radius: 5px;
}
.b-close {
  background-color: rgb(160, 160, 158);
  color: black;
  padding: 8px 9px;
  display: inline;
  cursor: pointer;
  border-radius: 5px;
}
</style>
