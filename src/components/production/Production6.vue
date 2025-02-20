<template>
    <div class="production_wrap">
        <MianBaoXue :parData="parData"></MianBaoXue>
        <div class="content">
            <div class="cT">
                <div class="cq"><div class="shu"></div><div>知识产权常见问题</div></div>
                <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="什么是职务发明？" name="1">
                        <div>师生员工作为完成人作出的职务发明创造的知识产权属于学校。对外开展科研合作、社会服务、学术交流、实习实践等活动时，涉及知识产权的，应当在相关合同中明确约定知识产权归属。通常情况下，师生员工作为发明人的专利申请，学校应当作为知识产权的权利人，合同中另有约定的除外。</div>
                    </el-collapse-item>
                    <el-collapse-item title="知识产权类型有哪些？" name="2">
                        <div>常见的知识产权类型包括专利、软件著作权和技术秘密。专利适合于保护易被模仿、他人易通过研发获得、侵权行为易被发现并举证的创新点，反之则适合采用技术秘密形式进行保护。软件著作权只保护软件的表现形式，如希望保护软件的构思，可以通过申请专利的方式进行。</div>
                    </el-collapse-item>
                    <el-collapse-item title="什么是技术秘密？" name="3">
                        <div>技术秘密是指能为权利人带来利益、权利人已采取严格的保密措施、不为公众所知悉的技术信息，包括设计、程序、配方、工艺、方法、诀窍及其他形式的技术信息。技术秘密的保护需要权利人积极主动地采取相应的措施，例如在教职工入职、项目开始时就签署相应的保密协议，并在项目进展的过程中通过签署相应的成果确认文件的方式及时确认技术秘密的形成等。</div>
                    </el-collapse-item>
                </el-collapse>
                <div class="cq" style="margin-top: 20px;"><div class="shu"></div><div>成果转化常见问题</div></div>
                <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="什么类型成果可以进行转化？" name="4">
                        <div>专利、软件著作权、技术秘密等</div>
                    </el-collapse-item>
                    <el-collapse-item title="有哪些典型的转化方式？" name="5">
                        <div>许可、转让、投资入股，复合转化模式</div>
                    </el-collapse-item>
                    <el-collapse-item title="如何选择转化方式？" name="6">
                        <div>综合考虑技术水平、市场情况、竞争情况、经营团队、学术带头人的发展阶段。</div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
    </div>
</template>

<script>
import MianBaoXue from './MianBaoXue.vue'
export default {
    data() {
        return {
            parData: ["面向研究人员", "常见问题"],
            activeName: '1'
        }
    },
    components: {
        MianBaoXue
    },
}
</script>

<style lang="scss" scoped>
.production_wrap {
    width: 100%;
}

.content {
    font-size: 18px;   
     color: #323232;
}
::v-deep .el-collapse-item__header{
   font-size: 18px;
   color: #323232;
}
::v-deep .el-collapse-item__content{
    font-size: 16px;
    color: #666666;
}
.cq{
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    .shu{
        width: 3px;
        height: 22px;
        background: rgb(112, 48, 160);
        margin-right: 10px;
    }
}
</style>