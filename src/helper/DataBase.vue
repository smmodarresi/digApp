<!-- <template>
    <div id="copy-from-assets-container">
        <div v-if="true">
        </div>
        <div v-else id="log">
            <pre>
            <p>salam mohammad</p>
            </pre>
            <div v-if="errMess.length > 0">
                <p>{{errMess}}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance } from 'vue';

import { SQLiteDBConnection, SQLiteHook } from 'vue-sqlite-hook/dist';
import { Dialog } from '@capacitor/dialog';

export default defineComponent({
    name: 'CopyFromAssetsTest',
    components: {
    
    },
    setup() {
        // const [showSpinner, setShowSpinner] = useState(true);
        // const [log, setLog] = useState("");
        const app = getCurrentInstance()
        const sqlite: SQLiteHook = app?.appContext.config.globalProperties.$sqlite;
             let errMess = "";
        const showAlert = async (message: string) => {
            await Dialog.alert({
            title: 'Error Dialog',
            message: message,
            });
        };
        const copyFromAssetsTest = async (): Promise<boolean>  => {
            try {
                // setLog(log.value.concat("* Starting testDatabaseCopyFromAssets *\n"));
                // console.log(`sqlite ${JSON.stringify(sqlite)}`);
                // await sqlite.copyFromAssets();
                // setLog(log.value.concat("> copyFromAssets successful\n"));


                // create a connection for dbForCopy
                let db: SQLiteDBConnection = await sqlite.createConnection("dbForCopy");
                // setLog(log.value.concat("> createConnection " +" 'dbForCopy' successful\n"));
                await db.open();
                // setLog(log.value.concat("> open 'dbForCopy' successful\n"));
                // Select all Users
                 let res: any = await db.query("SELECT * FROM areas");

                //  setLog(res.values);
                console.log(`@@@ res.values.length ${res.values.length}`)
                if(res.values.length !== 4 ||
                        res.values[0].name !== "Access road" ||
                        res.values[1].name !== "Accessway" ||
                        res.values[2].name !== "Air handling system"||
                        res.values[3].name !== "ali"
                        ){
                    errMess = `Query Users not returning 3 values`;
                    return false;
                }

                // setLog(log.value.concat("> query 'dbForCopy' successful\n"));

                 let sqlcmd = "INSERT INTO areas (id ,name, favourite) VALUES (?,?,?)";
                let values: Array<any>  = [5,"dfgdfcom",8547];
                res = await db.run(sqlcmd,values);
                console.log(`query ${JSON.stringify(res)}`);
                // Close Connection dbForCopy       
                await sqlite.closeConnection("dbForCopy"); 
                // setLog(log.value.concat("> closeConnection 'dbForCopy' successful\n"));
                        
                // setLog(log.value.concat("* Ending testDatabaseCopyFromAssets *\n"));
                return true;
            } catch (err: any) {
                errMess = err.message ? `${err.message}` : err;
                return false;
            }
        }
        
        onMounted(async () => {
            // Running the test
            console.log('$$$ Start CopyFromAssets on Mounted $$$')
            const retCopyFromAssets: boolean = await copyFromAssetsTest();
            console.log(`retCopyFromAssets: ${retCopyFromAssets}`)
            // setShowSpinner(false);
            if(!retCopyFromAssets) {
                // setLog(log.value.concat("* testDatabaseCopyFromAssets failed *\n"));
                // setLog(log.value.concat("\n* The set of tests failed *\n"));
                await showAlert(errMess);
            } else {
                // setLog(log.value.concat("\n* The set of tests was successful *\n"));
            }
            console.log('$$$ End CopyFromAssetsTest on Mounted $$$')
        });
        return {  errMess };
    },
});
</script> -->