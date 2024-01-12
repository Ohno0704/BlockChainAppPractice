import { RepositoryFactoryHttp, Account, TransactionGroup } from "symbol-sdk";
import { firstValueFrom } from 'rxjs';
const alicePrivateKey =
  "5824989E26974C146713D5F560C1A151DB56E4F771A9AE26A08AD986654AB1E8";

const example = async (): Promise<void> => {
  // Network information
  const nodeUrl = "http://sym-test-01.opening-line.jp:3000";
  const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
  const networkType = await firstValueFrom(repositoryFactory.getNetworkType());
  const alice = Account.createFromPrivateKey(alicePrivateKey, networkType);
  const txRepo = repositoryFactory.createTransactionRepository(); 
  const result = await firstValueFrom(txRepo 
    .search({
      group: TransactionGroup.Confirmed,
      embedded: true,
      address: alice.address,
    })) 
  console.log(result);
};
example().then();