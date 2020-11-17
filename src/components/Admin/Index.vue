<template>
  <div>
        <div class="col-sm-2">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <ul class="nav nav-stacked">
                        <!-- Links are to sibling routes -->
                        <li><router-link to="/admin">浏览所有产品</router-link></li>
                        <li><router-link to="/admin/new">输入新的产品</router-link></li>
                        <!-- <li><router-link to="/admin/edit">编辑产品</router-link></li> -->
                    </ul>
                </div>
            </nav>
        </div>
        <div class="col-sm-10">
            <router-view></router-view>
        </div>
    </div>
</template>