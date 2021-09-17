var xlsx = require('xlsx-js-style');

class sample {

    // sheetOne (rawBodyData: any[]): XLSX.WorkBook {
    //      // mock rawBodyData
    //     rawBodyData = [{
    //         c3: '1',
    //         c1: 'ข้าวขาวพื้นแข็ง',
    //         c2: 'กข29',
    //         c4: '1',
    //         c5: '2'
    //     }, {
    //         c3: '2',
    //         c1: 'ข้าวขาวพื้นนุ่ม',
    //         c2: 'พิษณุโลก 80',
    //         c4: '2',
    //         c5: '5'
    //     }, {
    //         c3: '5',
    //         c1: 'ข้าวเหนียว',
    //         c2: 'สันป่าตอง 1',
    //         c4: '5',
    //         c5: '10'
    //     }]

    //     const data = [
    //         'แบบฟอร์ม 1',
    //         'ศักยภาพและแผนผลิตพันธุ์ข้าวประจำปี........ฤดู........',
    //         'หน่วย : ตัน',
    //         'รวม'
    //     ]

    //     const headRow1 = this.headerData(33,0,30, data); // จำนวนคอลั่มทั้งหมด, Row, ตแหน่งที่จะใส่ข้อมูล, Data Header
    //     const headRow2 = this.headerData(33,1,0, data);
    //     const headRow3 = this.headerData(33,2,30, data);
    //     const headRow4 = [];
    //     const footerData = this.headerData(33,3,0, data);

    //     for(var i = 0; i< 33; i++){
    //         if(i == 0 || i == 1 || i == 2 || i == 33){
    //             headRow4[0] = 'กลุ่มข้าว';
    //             headRow4[1] = 'พันธุ์';
    //             headRow4[2] = 'ศูนย์เมล็ดพันธุ์ข้าว';
    //             headRow4[33] = 'รวม';
    //         }else{
    //             headRow4[i] = '';
    //         }
    //     }

    //     const headerData = [
    //         headRow1,
    //         headRow2,
    //         headRow3,
    //         headRow4,
    //         [
    //             '',
    //             '',
    //             'พล.',
    //             'นม.',
    //             'ลป.',
    //             'ชน.',
    //             'พท.',
    //             'ลพ.',
    //             'ชม.',
    //             'พย.',
    //             'กพ.',
    //             'อบ.',
    //             'รอ.',
    //             'อด.',
    //             'กส.',
    //             'พร.',
    //             'นว.',
    //             'สร.',
    //             'ขก.',
    //             'สน.',
    //             'ชบ.',
    //             'รบ.',
    //             'สท.',
    //             'สฎ.',
    //             'ปน.',
    //             'ศก.',
    //             'บก.',
    //             'นย.',
    //             'บร.',
    //             'อจ.',
    //             'พจ.',
    //             'ชย.',
    //             'สพ.',
    //             ''
    //         ]
    //     ]

    //     const bodyData = rawBodyData.map(e => [e.c1, e.c2, e.c3, e.c4, e.c5]);


    //     const mergedData = [...headerData, ...bodyData, ...footerData]
    
    //     const workSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(mergedData, { skipHeader: true, sheetStubs: true })
    
    //     const rowsStyle = []
    //     for (let i = 0; i < mergedData.length; i++) {
    //         rowsStyle.push({ hpt: 24 })
    //     }
    //     workSheet['!rows'] = rowsStyle

    //     workSheet['!cols'] = [
    //         { wpx: 120, MDW: 7 },
    //         { wpx: 120, MDW: 7 },
    //         { wpx: 120, MDW: 7 },
    //         { wpx: 150, MDW: 7 },
    //         { wpx: 250, MDW: 7 },
    //         { wpx: 90, MDW: 7 }
    //     ]
    
    //     workSheet['!merges'] = [
    //         { s: { c: 30, r: 1 }, e: { c: 33, r: 1 } },
    //         { s: { c: 0, r: 2 }, e: { c: 33, r: 2 } },
    //         { s: { c: 30, r: 3 }, e: { c: 33, r: 3 } },
    //         { s: { c: 2, r: 4 }, e: { c: 32, r: 4 } },
    //         { s: { c: 0, r: 4 }, e: { c: 0, r: 5 } },
    //         { s: { c: 1, r: 4 }, e: { c: 1, r: 5 } },
    //         { s: { c: 33, r: 4 }, e: { c: 33, r: 5 } },
    //         { s: { c: 0, r: mergedData.length - 1 }, e: { c: 1, r: mergedData.length - 1 } }
    //     ]

    //     const range = XLSX.utils.decode_range(workSheet['!ref'])
    //     let rowNum, colNum
    //     for (rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
    //         for (colNum = range.s.c; colNum <= range.e.c; colNum++) {
    //             const key = XLSX.utils.encode_cell({ r: rowNum, c: colNum })
    //             let cell: XLSX.CellObject = workSheet[key]
    
    //             // set styles
    //             cell.s = {}
    
    //             // set font
    //             cell.s.font = {}
    //             cell.s.font.name = "TH SarabunPSK"
    //             cell.s.font.sz = 16
    
    //             // set alignment
    //             cell.s.alignment = {}
    //             cell.s.alignment.horizontal = 'center'
    //             cell.s.alignment.vertical = 'bottom'
    
    //             if (rowNum > 3) {
    //                 // set border
    //                 cell.s.border = {}
    //                 cell.s.border.top = { style: 'thin', color: { rgb: 'FF000000' } }
    //                 cell.s.border.left = { style: 'thin', color: { rgb: 'FF000000' } }
    //                 cell.s.border.right = { style: 'thin', color: { rgb: 'FF000000' } }
    //                 cell.s.border.bottom = { style: 'thin', color: { rgb: 'FF000000' } }
    //             }
    //         }
    //     }
    
    //     let specificCell: XLSX.CellObject
    
    //     specificCell = workSheet['AF1']
    //     specificCell.s.alignment.horizontal = 'right'
    
    //     specificCell = workSheet['AF4']
    //     specificCell.s.alignment.horizontal = 'right'
    
    //     specificCell = workSheet['A2']
    //     specificCell.s.font.bold = true
    
    //     const newWorkBook: XLSX.WorkBook = XLSX.utils.book_new()
    //     XLSX.utils.book_append_sheet(newWorkBook, workSheet, 'report-1')
    
    //     return newWorkBook
    // }

    // sheetSix (rawBodyData: any[]): XLSX.WorkBook {
    //     // mock rawBodyData
    //     rawBodyData = [{
    //         c1: '1',
    //         c2: 'กรุงเทพ',
    //         c3: 'ข้าวเหนียว',
    //         c4: 'ข้าวพันธุ์',
    //         c5: 'ฤดูร้อน',
    //         c6: '10',
    //         c7: '200',
    //         c8: 'ไม่มีเมล็ดพันธุ์สำหรับทำแปลง',
    //     }, {
    //         c1: '2',
    //         c2: 'เชียงใหม่',
    //         c3: 'ข้าวเชียงใหม่',
    //         c4: 'ข้าวพันธุ์',
    //         c5: 'ฤดูหนาว',
    //         c6: '0',
    //         c7: '500',
    //         c8: '-',
    //     }, {
    //         c1: '3',
    //         c2: 'เชียงราย',
    //         c3: 'ข้าวเชียงราย',
    //         c4: 'ข้าวพันธุ์',
    //         c5: 'ฤดูฝน',
    //         c6: '5',
    //         c7: '0',
    //         c8: 'ปรับเปลี่ยนตามสถานการณ์ตลาด',
    //     }]

    //     const data = [
    //         'แบบฟอร์ม 6',
    //         'ศักยภาพและแผนผลิตเมล็ดพันธุ์ข้าวประจำปี (ทบทวน)',
    //         'ปี …………… ฤดู ...............',
    //         'หน่วย : ตัน',
    //         'รวม'
    //     ]

    //     const headRow1 = this.headerData(8,0,7, data); // จำนวนคอลั่มทั้งหมด, Row, ตแหน่งที่จะใส่ข้อมูล, data head
    //     const headRow2 = this.headerData(8,1,0, data);
    //     const headRow3 = this.headerData(8,2,0, data);
    //     const headRow4 = this.headerData(8,3,7, data);
    //     const headRow5 = [
    //         'ลำดับ',
    //         'ศูนย์เมล็ดพันธุ์ข้าว',
    //         'กลุ่มพันธุ์',
    //         'พันธุ์',
    //         'ฤดู',
    //         'เป้าหมายการผลิต (เดิม)',
    //         'เป้าหมายการผลิต (ใหม่)',
    //         'เหตุผลประกอบ (เลือก)'
    //     ]
    //     const footerData = this.headerData(8,4,0);

    //     const bodyData = rawBodyData.map(e => [e.c1, e.c2, e.c3, e.c4, e.c5, e.c6, e.c7]);


    //     const mergedData = [...headerData, ...bodyData, ...footerData]
    
    //     const workSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(mergedData, { skipHeader: true, sheetStubs: true })
    
    //     const rowsStyle = []
    //     for (let i = 0; i < mergedData.length; i++) {
    //         rowsStyle.push({ hpt: 24 })
    //     }
    //     workSheet['!rows'] = rowsStyle

    //     workSheet['!cols'] = [
    //         { wpx: 120, MDW: 7 },
    //         { wpx: 120, MDW: 7 },
    //         { wpx: 120, MDW: 7 },
    //         { wpx: 150, MDW: 7 },
    //         { wpx: 250, MDW: 7 },
    //         { wpx: 90, MDW: 7 }
    //     ]
    
    //     workSheet['!merges'] = [
    //         { s: { c: 0, r: 2 }, e: { c: 7, r: 2 } },
    //         { s: { c: 0, r: 3 }, e: { c: 7, r: 3 } },
    //         { s: { c: 0, r: mergedData.length - 1 }, e: { c: 4, r: mergedData.length - 1 } }
    //     ]

    //     const range = XLSX.utils.decode_range(workSheet['!ref'])
    //     let rowNum, colNum
    //     for (rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
    //         for (colNum = range.s.c; colNum <= range.e.c; colNum++) {
    //             const key = XLSX.utils.encode_cell({ r: rowNum, c: colNum })
    //             let cell: XLSX.CellObject = workSheet[key]
    
    //             // set styles
    //             cell.s = {}
    
    //             // set font
    //             cell.s.font = {}
    //             cell.s.font.name = "TH SarabunPSK"
    //             cell.s.font.sz = 16
    
    //             // set alignment
    //             cell.s.alignment = {}
    //             cell.s.alignment.horizontal = 'center'
    //             cell.s.alignment.vertical = 'bottom'
    
    //             if (rowNum > 3) {
    //                 // set border
    //                 cell.s.border = {}
    //                 cell.s.border.top = { style: 'thin', color: { rgb: 'FF000000' } }
    //                 cell.s.border.left = { style: 'thin', color: { rgb: 'FF000000' } }
    //                 cell.s.border.right = { style: 'thin', color: { rgb: 'FF000000' } }
    //                 cell.s.border.bottom = { style: 'thin', color: { rgb: 'FF000000' } }
    //             }
    //         }
    //     }
    
    //     let specificCell: XLSX.CellObject
    
    //     specificCell = workSheet['H']
    //     specificCell.s.alignment.horizontal = 'right'
    
    //     specificCell = workSheet['AF4']
    //     specificCell.s.alignment.horizontal = 'right'
    
    //     specificCell = workSheet['A2']
    //     specificCell.s.font.bold = true
    
    //     const newWorkBook: XLSX.WorkBook = XLSX.utils.book_new()
    //     XLSX.utils.book_append_sheet(newWorkBook, workSheet, 'report-6')
    
    //     return newWorkBook
    // }

    // sheetTwo (rawBodyData: any[]): XLSX.WorkBook {
    //     // mock rawBodyData
    //     rawBodyData = [{
    //         c1: '1',
    //         c2: 'กข29',
    //         c3: 'ข้าวขาวพื้นแข็ง',
    //         c4: '10',
    //         c5: '11',
    //         c6: '12',
    //         c7: '1',
    //         c8: '2',
    //         c9: '3',
    //         c10: '4',
    //         c11: '5',
    //         c12: '6',
    //         c13: '7',
    //         c14: '8',
    //         c15: '9',
    //     }, {
    //         c1: '2',
    //         c2: 'ก25',
    //         c3: 'ข้าวขาวพื้น',
    //         c4: '10',
    //         c5: '11',
    //         c6: '12',
    //         c7: '1',
    //         c8: '2',
    //         c9: '3',
    //         c10: '4',
    //         c11: '4',
    //         c12: '3',
    //         c13: '2',
    //         c14: '1',
    //         c15: '0',
    //     }, {
    //         c1: '3',
    //         c2: 'ค52',
    //         c3: 'ข้าว',
    //         c4: '1',
    //         c5: '2',
    //         c6: '3',
    //         c7: '4',
    //         c8: '5',
    //         c9: '6',
    //         c10: '7',
    //         c11: '8',
    //         c12: '9',
    //         c13: '10',
    //         c14: '11',
    //         c15: '12',
    //     }]
    
    //    const data = [
    //        'แบบฟอร์ม 2',
    //        'แผนการจำหน่ายเมล็ดพันธุ์ข้าว ปี ..............',
    //        'หน่วย : ตัน',
    //        'รวม'
    //    ]
    
    //    const headRow1 = this.headerData(15,0,14, data); // จำนวนคอลั่มทั้งหมด, Row, ตแหน่งที่จะใส่ข้อมูล, Data Header
    //    const headRow2 = this.headerData(15,1,0, data);
    //    const headRow3 = this.headerData(15,2,14, data);
    //    const headRow4 = [];
    //    const footerData = this.headerData(15,3,0, data);
    
    //    for(var i = 0; i< 33; i++){
    //        if(i == 0 || i == 1 || i == 2 || i == 33){
    //            headRow4[0] = 'ลำดับ';
    //            headRow4[1] = 'ศูนย์เมล็ดพันธุ์ข้าว';
    //            headRow4[2] = 'พันธุ์';
    //            headRow4[3] = 'ปริมาณเมล็ดพันธุ์ที่คาดว่าจะจำหน่ายได้';
    //            headRow4[15] = 'รวม';
    //        }else{
    //            headRow4[i] = '';
    //        }
    //    }
    
    //    const headerData = [
    //        headRow1,
    //        headRow2,
    //        headRow3,
    //        headRow4,
    //        [
    //            '',
    //            '',
    //            '',
    //            'ต.ค.',
    //            'พ.ย.',
    //            'ธ.ค.',
    //            'ม.ค.',
    //            'ก.พ.',
    //            'มี.ค.',
    //            'เม.ย.',
    //            'พ.ค.',
    //            'มิ.ย.',
    //            'ก.ค.',
    //            'ส.ค.',
    //            'ก.ย.',
    //            ''
    //        ]
    //    ]
    
    //    const bodyData = rawBodyData.map(e => [e.c1, e.c2, e.c3, e.c4, e.c5, e.c6, e.c7, e.c8, e.c9, e.c10, e.c11, e.c12, e.c13, e.c14, e.c15]);
        
    //    const mergedData = [...headerData, ...bodyData, ...footerData]
    
    //    const workSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(mergedData, { skipHeader: true, sheetStubs: true })
    
    //    const rowsStyle = []
    //    for (let i = 0; i < mergedData.length; i++) {
    //        rowsStyle.push({ hpt: 24 })
    //    }
    //    workSheet['!rows'] = rowsStyle
    
    //    workSheet['!cols'] = [
    //        { wpx: 120, MDW: 7 },
    //        { wpx: 120, MDW: 7 },
    //        { wpx: 120, MDW: 7 },
    //        { wpx: 150, MDW: 7 },
    //        { wpx: 250, MDW: 7 },
    //        { wpx: 90, MDW: 7 }
    //    ]
    
    //    workSheet['!merges'] = [
    //        { s: { c: 14, r: 1 }, e: { c: 15, r: 1 } },
    //        { s: { c: 0, r: 2 }, e: { c: 15, r: 2 } },
    //        { s: { c: 14, r: 3 }, e: { c: 15, r: 3 } },
    //        { s: { c: 0, r: 4 }, e: { c: 0, r: 5 } },
    //        { s: { c: 1, r: 4 }, e: { c: 1, r: 5 } },
    //        { s: { c: 2, r: 4 }, e: { c: 2, r: 5 } },
    //        { s: { c: 3, r: 4 }, e: { c: 14, r: 4 } },
    //        { s: { c: 15, r: 4 }, e: { c: 15, r: 5 } },
    //        { s: { c: 0, r: mergedData.length - 1 }, e: { c: 2, r: mergedData.length - 1 } }
    //    ]
    
    //    const range = XLSX.utils.decode_range(workSheet['!ref'])
    //    let rowNum, colNum
    //    for (rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
    //        for (colNum = range.s.c; colNum <= range.e.c; colNum++) {
    //            const key = XLSX.utils.encode_cell({ r: rowNum, c: colNum })
    //            let cell: XLSX.CellObject = workSheet[key]
    
    //            // set styles
    //            cell.s = {}
    
    //            // set font
    //            cell.s.font = {}
    //            cell.s.font.name = "TH SarabunPSK"
    //            cell.s.font.sz = 16
    
    //            // set alignment
    //            cell.s.alignment = {}
    //            cell.s.alignment.horizontal = 'center'
    //            cell.s.alignment.vertical = 'bottom'
    
    //            if (rowNum > 3) {
    //                // set border
    //                cell.s.border = {}
    //                cell.s.border.top = { style: 'thin', color: { rgb: 'FF000000' } }
    //                cell.s.border.left = { style: 'thin', color: { rgb: 'FF000000' } }
    //                cell.s.border.right = { style: 'thin', color: { rgb: 'FF000000' } }
    //                cell.s.border.bottom = { style: 'thin', color: { rgb: 'FF000000' } }
    //            }
    //        }
    //    }
    
    //    let specificCell: XLSX.CellObject
    
    //    specificCell = workSheet['O1']
    //    specificCell.s.alignment.horizontal = 'right'
    
    //    specificCell = workSheet['O3']
    //    specificCell.s.alignment.horizontal = 'right'
    
    //    specificCell = workSheet['A2']
    //    specificCell.s.font.bold = true
    
    //    const newWorkBook: XLSX.WorkBook = XLSX.utils.book_new()
    //    XLSX.utils.book_append_sheet(newWorkBook, workSheet, 'report-2')
    
    //    return newWorkBook
    // }

    sheetNine (rawBodyData) {
        // mock rawBodyData
        rawBodyData = [{
            c1: 'กรุงเทพ',
            c2: 'กข29',
            c3: '100',
            c4: '200',
            c5: '300',
            c6: '400',
            c7: '500',
            c8: '600',
            c9: '700',
            c10: '800',

        }, {
            c1: 'เชียงใหม่',
            c2: 'ชช123',
            c3: '100',
            c4: '200',
            c5: '300',
            c6: '400',
            c7: '500',
            c8: '600',
            c9: '700',
            c10: '800',
        }, {
            c1: 'เชียงราย',
            c2: 'ชน11',
            c3: '100',
            c4: '200',
            c5: '300',
            c6: '400',
            c7: '500',
            c8: '600',
            c9: '700',
            c10: '800',
        }]
    
        const data = [
            'แบบฟอร์ม 9',
            'ใบตรวจการปฏิบัติงาน',
            'วันที่..............(ไม่ต้องออกวันที่จากระบบ).....................',
            'ศูนย์เมล็ดพันธุ์ข้าว……………………………………………………………',
            'โครงการ……………………………………………………………………………',
            'คณะกรรมการตามคำสั่งกรมการข้าว ที่ .........../...............ลงวันที่……………………………………………………...',
            'ได้ตรวจรับเมล็ดพันธุ์ข้าว ณ ศูนย์เมล็ดพันธุ์ข้าว ดังนี้',
            'รวม'
        ]
        
        const headRow1 = this.headerData(10,0,9, data); // จำนวนคอลั่มทั้งหมด, Row, ตำแหน่งที่จะใส่ข้อมูล, Data Header
        const headRow2 = this.headerData(10,1,0, data);
        const headRow3 = this.headerData(10,2,0, data);
        const headRow4 = this.headerData(10,3,0, data);
        const headRow5 = this.headerData(10,4,0, data);
        const headRow6 = this.headerData(10,5,0, data);
        const headRow7 = this.headerData(10,6,0, data);
        const headRow8 = [
            'จังหวัด',
            'พันธุ์/ชั้นพันธุ์',
            'ราคารวมค่าขนส่ง (บาท/กิโลกรัม)',
            'จำนวนเมล็ดพันธุ์ (กิโลกรัม)',
            'จำนวนเงินค่าเมล็ดพันธุ์ (บาท)',
            'คุณภาพ','','','',''
        ];

        const headRow9 = [
            '','','',
            '','',
            'ความงอก (%)','เมล็ดพันธุสุทธิ (%)','พันธุ์ปน (จำนวนเมล็ดใน 500 กรัม)','ข้าวแดง (จำนวนเมล็ดใน 500 กรัม)','ความชื้น (%)'
        ];
    
        const footerData = this.headerData(10,7,0, data);

        const headerData = [
            headRow1,
            headRow2,
            headRow3,
            headRow4,
            headRow5,
            headRow6,
            headRow7,
            headRow8,
            headRow9
        ]
        
        const footer1 = [
            '','',
            'เห็นว่ามีปริมาณและคุณภาพถูกต้องครบถ้วนแล้ว จึงพร้อมกันลงลายมือชื่อไว้เป็นหลักฐาน','','',
            '','','',
            '',''
        ]

        const footer2 = [
            '','',
            '(ลงนาม).......................................................................ประธานกรรมการ','','',
            '','','',
            '',''
        ]

        const footer3 = [
            '','',
            '(                                         )','','',
            '','','',
            '',''
        ]

        const footer4 = [
            '','',
            'รักษาราชการแทน/รักษาการในตำแหน่งผู้อำนวยการศูนย์เมล็ดพันธุ์ข้าว.......................................','','',
            '','','',
            '',''
        ]

        const footer5 = [
            '','',
            '(ลงนาม).......................................................................กรรมการ','','',
            '','','',
            '',''
        ]

        const footer6 = [
            '','',
            '(                                         )','','',
            '','','',
            '',''
        ]

        const footer7 = [
            '','',
            'รักษาราชการแทน/รักษาการในตำแหน่งหัวหน้ากลุ่มควบคุมคุณภาพ','','',
            '','','',
            '',''
        ]

        const footer8 = [
            '','',
            '(ลงนาม).......................................................................กรรมการ','','',
            '','','',
            '',''
        ]

        const footer9 = [
            '','',
            '(                                         )','','',
            '','','',
            '',''
        ]

        const footer10 = [
            '','',
            'รักษาราชการแทน/รักษาการในตำแหน่งหัวหน้ากลุ่มถ่ายทอดวิทยาการผลิตเมล็ดพันธุ์ดี','','',
            '','','',
            '',''
        ]

        const spaceHead = [
            '','',
            '','','',
            '','','',
            '',''
        ]

        const spaceFoot = [
            '','',
            '','','',
            '','','',
            '',''
        ]


        const allFooter = [
            footer1,
            footer2,
            footer3,
            footer4,
            footer5,
            footer6,
            footer7,
            footer8,
            footer9,
            footer10
        ]
    
        const bodyData = rawBodyData.map(e => [e.c1, e.c2, e.c3, e.c4, e.c5, e.c6, e.c7, e.c8, e.c9, e.c10]);
            
        const mergedData = [...headerData, ...spaceHead, ...bodyData, ...footerData, ...spaceFoot, ...allFooter]
        
        const workSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(mergedData, { skipHeader: true, sheetStubs: true })
        
        const rowsStyle = []
        for (let i = 0; i < mergedData.length; i++) {
            rowsStyle.push({ hpt: 24 })
        }
        workSheet['!rows'] = rowsStyle
        
        workSheet['!cols'] = [
            { wpx: 100, MDW: 7 },
            { wpx: 100, MDW: 7 },
            { wpx: 100, MDW: 7 },
            { wpx: 100, MDW: 7 },
            { wpx: 100, MDW: 7 },
            { wpx: 100, MDW: 7 },
            { wpx: 100, MDW: 7 },
            { wpx: 100, MDW: 7 },
            { wpx: 100, MDW: 7 },
            { wpx: 100, MDW: 7 }
        ]
    
        workSheet['!merges'] = [
            // 
            { s: { c: 0, r: 2 }, e: { c: 9, r: 2 } },
            { s: { c: 0, r: 3 }, e: { c: 9, r: 3 } },
            { s: { c: 0, r: 4 }, e: { c: 9, r: 4 } },
            { s: { c: 0, r: 5 }, e: { c: 9, r: 5 } },
            { s: { c: 0, r: 6 }, e: { c: 9, r: 6 } },
            { s: { c: 0, r: 7 }, e: { c: 9, r: 7 } },
            { s: { c: 0, r: 9 }, e: { c: 0, r: 10 } },
            { s: { c: 1, r: 9 }, e: { c: 1, r: 10 } },
            { s: { c: 2, r: 9 }, e: { c: 2, r: 10 } },
            { s: { c: 3, r: 9 }, e: { c: 3, r: 10 } },
            { s: { c: 4, r: 9 }, e: { c: 4, r: 10 } },
            { s: { c: 5, r: 9 }, e: { c: 9, r: 9 } },
            { s: { c: 0, r: mergedData.length - 1 }, e: { c: 2, r: mergedData.length - 1 } },
            { s: { c: 3, r: mergedData.length + 2 }, e: { c: 7, r: mergedData.length + 2 } },
            { s: { c: 3, r: mergedData.length + 4 }, e: { c: 7, r: mergedData.length + 4 } },
            { s: { c: 3, r: mergedData.length + 5 }, e: { c: 7, r: mergedData.length + 5 } },
            { s: { c: 3, r: mergedData.length + 6 }, e: { c: 7, r: mergedData.length + 6 } },
            { s: { c: 3, r: mergedData.length + 7 }, e: { c: 7, r: mergedData.length + 7 } },
            { s: { c: 3, r: mergedData.length + 8 }, e: { c: 7, r: mergedData.length + 8 } },
            { s: { c: 3, r: mergedData.length + 9 }, e: { c: 7, r: mergedData.length + 9 } },
            { s: { c: 3, r: mergedData.length + 10 }, e: { c: 7, r: mergedData.length + 10 } },
            { s: { c: 3, r: mergedData.length + 11 }, e: { c: 7, r: mergedData.length + 11 } },
            { s: { c: 3, r: mergedData.length + 12 }, e: { c: 7, r: mergedData.length + 12 } }            

        ]
    
        const range = XLSX.utils.decode_range(workSheet['!ref'])
        let rowNum, colNum
        for (rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
            for (colNum = range.s.c; colNum <= range.e.c; colNum++) {
                const key = XLSX.utils.encode_cell({ r: rowNum, c: colNum })
                let cell: XLSX.CellObject = workSheet[key]
        
                // set styles
                cell.s = {}
        
                // set font
                cell.s.font = {}
                cell.s.font.name = "TH SarabunPSK"
                cell.s.font.sz = 16
        
                // set alignment
                cell.s.alignment = {}
                cell.s.alignment.horizontal = 'center'
                cell.s.alignment.vertical = 'bottom'
        
                if (rowNum > 3) {
                    // set border
                    cell.s.border = {}
                    cell.s.border.top = { style: 'thin', color: { rgb: 'FF000000' } }
                    cell.s.border.left = { style: 'thin', color: { rgb: 'FF000000' } }
                    cell.s.border.right = { style: 'thin', color: { rgb: 'FF000000' } }
                    cell.s.border.bottom = { style: 'thin', color: { rgb: 'FF000000' } }
                }
            }
        }
        
        let specificCell: XLSX.CellObject
        
        specificCell = workSheet['J1']
        specificCell.s.alignment.horizontal = 'right'   
        
        specificCell = workSheet['A2', 'A3', 'A4', 'A5', 'A6', 'A7']
        specificCell.s.font.bold = true
        
        const newWorkBook: XLSX.WorkBook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(newWorkBook, workSheet, 'report-9')
        
        return newWorkBook
    }

    headerData(value, num, position, dataHead){
        const headRow = [];

        for(var i = 0; i< value; i++){
            if(i == position){
                headRow[i] = dataHead[num];
            }else{
                headRow[i] = '';
            }
        }

        return headRow;
    }
}

exports.sample = sample;

