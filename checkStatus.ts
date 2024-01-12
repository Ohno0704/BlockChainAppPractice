import { RepositoryFactoryHttp } from "symbol-sdk";
import { firstValueFrom } from 'rxjs';
const example = async (): Promise<void> => {
  // Network information
  const nodeUrl = "http://sym-test-01.opening-line.jp:3000";
  const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
  const tsRepo = repositoryFactory.createTransactionStatusRepository();
  const transactionStatus = await firstValueFrom(tsRepo
    .getTransactionStatus(
      "D4BA5803EFADFFE0E2DA9A7B11BB19F3E4E063F8C05E8639D9132DF696E027E7" //この部分をaggregateTransaction.ts実行結果のTransaction Hashの値に置き換えて下さい
    )) 
  console.log(transactionStatus);
};
example().then();