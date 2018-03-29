import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import showdown from 'showdown'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
    html;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      let converter = new showdown.Converter();
      this.html = converter.makeHtml(`

# API文档说明大料

         
## 6.验证物料与投料仓是否匹配

### 6.1 URL

    http://localhost:8080/app/rest/v2/services/sct_VtTBService/isBinMatchingMaterial
    
### 6.2 请求方式 ： POST

### 6.3 参数

    {
        "rfidEpc":"R2017M11111",     //物料RFID编号
        "canNo":"C001"     //仓号
    }
    
### 6.4 返回值

    false           //false/true
    
## 7. 6F大料：收到 RFID卡信息，验证是否收货，如果物料信息匹配则返回物料信息

### 7.1 URL

    http://localhost:8080/app/rest/v2/services/sct_VtLargeMaterialService/resultMaterialInfo
    
### 7.2 请求方式 ：POST

### 7.3 参数

    {
        "rfidEpc":["201108000587"]              //物料RFID编号（数组）
    }
    
### 7.4 返回值

    [
        {
            "RfidMaterialCard": {                                   --物料RFID详情
                "_entityName": "sct$VtRfidMaterialCard",
                "id": "ad0b8abf-8471-4935-1e65-6407165e350d",
                "remainingQuantity": 800,                           --剩余数量
                "rfidEpc": {                                        --RFID详细信息
                    "_entityName": "sct$VtRfidCard",
                    "id": "624ed9c7-a024-4219-df65-543a21286fbe",
                    "rfidEpc": "201108000587",                      --RFID卡号
                    "version": 1
                },
                "supplierBatchNo": "SU20171108002",                 --供应商批号
                "rfidMaterialType": "Large_Material",               --物料类型
                "usedQuantity": 100,                                --发放数量
                "lastUsedTime": "2017-11-21 20:19:54.974",          --上次使用时间
                "version": 1,
                "valid": true,                                      --可用
                "totalQuantity": 900,                               --总数量(调拨单总数量)
                "posCode": "H002",                                  --货位号
                "materialCardType": "Consume_Material",             --物料卡类型（Consume_Material：耗料卡；Raw_Material：原料卡）
                "invName": "水产用维生素",                          --物料名称
                "factoryBatchNo": "JC20171108002",                  --进厂批号
                "invCode": {                                        --物料详细信息
                    "_entityName": "sct$VtMaterialInfo",
                    "id": "ad35d49e-f89e-99c7-297b-def674e36e3b",
                    "version": 1,
                    "invCode": "M002"                               --物料编号
                }
            }
        }
    ]
    
    []                      --物料信息与收获信息不匹配返回空
    
    
## 8. 6F大料：点击“确认收货”，改变收货任务的状态以及时间

### 8.1 URL

    http://localhost:8080/app/rest/v2/services/sct_VtLargeMaterialService/collectGoodsEnd
    
### 8.2 请求方式 ：POST

### 8.3 参数

    {
        "rfidEpc":["201108000587"]              //物料RFID编号（数组）
    }
    
### 8.4 返回值

    Success
  
  
  
## 1. 6F大料：开始投料，选择料仓，点击“开始投料”，扫描物料卡,返回物料信息，点击弹框“开始投料”

### 1.1 URL

    http://localhost:8080/app/rest/v2/services/sct_VtLargeMaterialService/feedingStart
    
### 1.2 请求方式 ：POST

### 1.3 参数

    {
        "rfidEpc":"987654321"，          //物料卡号
        "canNo":"C001"                   //仓号
    }
    
### 1.4 返回值

#### 1.4.1 错误返回值

    {
        "message": "料仓物料与RFID物料卡信息不匹配"
    }
    ---------------------------------------------------------------
    {
        "message": "不存在RFID物料卡信息：987654321"
    }
    
#### 1.4.1 正确返回值

    {
        "message": "Success"
    }
    
    
## 2. 6F大料：结束投料，弹框，扫描人员卡，输入数量，点击“确定”，（绑定人员与投料任务）结束时间，数量，状态

### 2.1 URL

    http://localhost:8080/app/rest/v2/services/sct_VtLargeMaterialService/feedingEnd
    
### 2.2 请求方式 ：POST

### 2.3 参数

    {
        "rfidEpcE":"R2017E00002",                   --人员卡号
        "quantity":"100",                           --投料数量
        "canNo":"4#"                                --仓号
    }
    
### 2.4 返回值

#### 2.4.1 错误返回值

    {
        "message": "不存在该投料任务"
    }
    ---------------------------------------------------------------
    {
        "message": "不存在的人员信息：987654321"
    }
    
#### 2.4.1 正确返回值

    {
        "message": "Success"
    }
    
    
## 3.获取仓库列表 6F
### 3.1 URL：

    http://localhost:8080/app/rest/v2/queries/sct$VtBuhlerBin/buhlerBinDate
    
### 3.2 请求方式 ： GET

### 3.3 返回值 

    [
        {
            "_entityName": "sct$VtBuhlerBin",                //仓实体
            "_instanceName": "C001",
            "id": "1c6845df-51d4-5452-7379-0f8b42199e27",   //仓ID
            "nominalRemainingQuantity": 1500,               //理论剩余容量
            "scale": "S001",                                //秤
            "opened": true,                                 //启用状态（true，false）
            "canNo": "C001",                                //仓号
            "errorRemainingQuantity": 600,                  //误差值
            "canCapacity": 10000,                           //仓容量
            "actualRemainingQuantity": 2300,                //实际剩余容量
            "invCode": {                                    //物料
                "_entityName": "sct$VtMaterialInfo",        //物料实体
                "_instanceName": "M001",
                "id": "2db8e732-0b8a-8e27-4c3b-6162a7d9351d",//物料ID
                "quantity": 1000,                           //数量
                "type": "Large_Material",                   //物料类型（大，小，载体）
                "specifications": "M001",                   //规格
                "comment": "M001",                          //备注
                "invName": "M001",                          //物料名称
                "invCode": "M001"                           //物料编号
            }
        }，
        {
                "_entityName": "sct$VtBuhlerBin",
                "_instanceName": "C0099",
                "id": "0269b872-5287-e77b-f59a-4e3e3397ba19",
                "nominalRemainingQuantity": 12,
                "scale": "12",
                "opened": true,
                "canNo": "C0099",
                "errorRemainingQuantity": 12,
                "canCapacity": 12,
                "actualRemainingQuantity": 12
                "invCode": { 
                ……
                ……
                }
            }
    ]
    
## 4.获取当前料仓物料

### 4.1 URL：

    http://localhost:8080/app/rest/v2/queries/sct$VtBuhlerBin/binMaterial?canNo=C001
    
### 4.2 请求方式 ： GET

### 4.3 参数 

    canNo 仓号
    
### 4.4 返回值


    [
        {
            "_entityName": "sct$VtBuhlerBin",                //仓实体
            "_instanceName": "C001",
            "id": "1c6845df-51d4-5452-7379-0f8b42199e27",   //仓ID
            "nominalRemainingQuantity": 1500,               //理论剩余容量
            "scale": "S001",                                //秤
            "opened": true,                                 //启用状态（true，false）
            "canNo": "C001",                                //仓号
            "errorRemainingQuantity": 600,                  //误差值
            "canCapacity": 10000,                           //仓容量
            "actualRemainingQuantity": 2300,                //实际剩余容量
            "invCode": {                                    //物料
                "_entityName": "sct$VtMaterialInfo",        //物料实体
                "_instanceName": "M001",
                "id": "2db8e732-0b8a-8e27-4c3b-6162a7d9351d",//物料ID
                "quantity": 1000,                           //数量
                "type": "Large_Material",                   //物料类型（大，小，载体）
                "specifications": "M001",                   //规格
                "comment": "M001",                          //备注
                "invName": "M001",                          //物料名称
                "invCode": "M001"                           //物料编号
            }
        }
    ]


    

      `)
  }
    isVisible = false;

    showModal = () => {
        this.isVisible = true;
    }

    handleOk = (e) => {
        console.log('点击了确定');
        this.isVisible = false;
    }

    handleCancel = (e) => {
        console.log(e);
        this.isVisible = false;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

    _allChecked = false;
    _indeterminate = false;
    _displayData = [];
    data = [ {
        key    : '1',
        name   : 'John Brown',
        age    : 32,
        address: 'New York No. 1 Lake Park',
    }, {
        key    : '2',
        name   : 'Jim Green',
        age    : 42,
        address: 'London No. 1 Lake Park',
    }, {
        key    : '3',
        name   : 'Joe Black',
        age    : 32,
        address: 'Sidney No. 1 Lake Park',
    } ];

    _displayDataChange($event) {
        this._displayData = $event;
        this._refreshStatus();
    }

    _refreshStatus() {
        const allChecked = this._displayData.every(value => value.checked === true);
        const allUnChecked = this._displayData.every(value => !value.checked);
        this._allChecked = allChecked;
        this._indeterminate = (!allChecked) && (!allUnChecked);
    }

    _checkAll(value) {
        if (value) {
            this._displayData.forEach(data => {
                data.checked = true;
            });
        } else {
            this._displayData.forEach(data => {
                data.checked = false;
            });
        }
        this._refreshStatus();
    }

}
