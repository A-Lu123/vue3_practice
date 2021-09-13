<template>
    <div>
        <div class="crumb mgb10">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-s-help"></i>
                    {{ $t('i18n.breadcrumb') }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card shadow="hover">
            <h2>
                <span>{{ $t('i18n.tips') }}</span>
                <el-button type="primary" size="small"
                @click="$i18n.locale = $i18n.locale === 'zh-cn'? 'en' : 'zh-cn'">{{ $t('i18n.btn') }}</el-button>
            </h2>
            <div class="container">
                <h2>{{ $t('i18n.title1') }}</h2>
                <p>{{ $t('i18n.p1') }}</p>
                <p>{{ $t('i18n.p2') }}</p>
                <p>{{ $t('i18n.p3') }}</p>
            </div>
        </el-card>  
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.mgb10 {
    margin-bottom: 10px;
}
</style>