<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Tambah Data</div>

                    <div class="card-body">
                        <table class="table table-bordered">         
                    <tr>
                      <th><center>Nama</center></th>
                      <th style="width :50%">
                        <center> Aksi </center>
                      </th> 
                    </tr>
                    <td><center>SITI</center></td>
                    <td><center>
                    <tr>
                        <a href="#">
                        <i class="fas fa-eye red"></i> VIEW  | </i>
                        </a>
                        <a href="#">
                        <i class="fas fa-edit pink">EDIT | </i>
                        </a>
                        <a href="#">
                        <i class="fas fa-trash teal">DELETE</i>
                        </a>
                    </tr>
                    </center></td>
                </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
