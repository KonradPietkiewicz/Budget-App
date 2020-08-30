class BudgetApp {
    switchInput = null
    descriptionInput = null
    valueInput = null
    enterButton = null
    balanceList = null
    balanceListExpenses = null
    balanceListIncomes = null
    deleteButton = null
    totalBudgetInfo = null

    UiSelectors = {
        switchInput: 'switch',
        descriptionInput: 'description',
        valueInput: 'value',
        enterButton: '[data-enter-button]',
        balanceList: '[data-balance-list]',
        balanceListIncomes: '[data-balance-lis-incomes]',
        balanceListExpenses: '[data-balance-list-expenses]',
        itemDescription: '[data-item-description]',
        itemValue: '[data-item-value]',
        totalBudgetInfo: '[data-total-budget-info]',
        deleteButton: '[data-delete-button]',
        editButton: '[data-edit-button]',

    }
    initializeApp() {
        console.log('siema')
    }
}