const { mainModule } = require("process");

module.exports = {
    answers : 
        `#include <iostream>
        using namespace std;

        int main() {
        
           long long int n,sum = 0;
            cin >> n;
            for(int i = 0; i < n; i++){
                long long int a;cin >> a;
                sum+=a;
            }
            cout << sum << endl;
            return 0;
        }
    `
}