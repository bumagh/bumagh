# 闭包引用
在你的代码中，`Start` 函数中的 `Debug.Log(i)` 输出只有一个 `6`，问题出在 `equipBtns[i].onClick.AddListener()` 的 `onClick` 事件处理逻辑中。

具体来说，你在 `for` 循环中给每个按钮添加了点击事件的监听器：

```csharp
equipBtns[i].onClick.AddListener(() =>
{
    typeTrans.gameObject.SetActive(false);
    detailTrans.gameObject.SetActive(true);
    ClearUI();
    var prefab = Resources.Load<GameObject>("Prefabs/Arcade/GoodsItem");
    Debug.Log(i);  // 这里的 i 其实是一个捕获的外部变量
    var goodsItem = ConfigData.goods.Find(ele => ele.GoodsTypeId == 6 && ele.GoodsTypeChild == (i + 1));
});
```

### 问题的根源
在 `onClick` 事件中，你使用了闭包（`()=>{}`）来捕获变量 `i`，但是由于 C# 中闭包的捕获机制，`i` 是按引用捕获的。这意味着，在每次点击时，闭包中的 `i` 会指向循环结束后的最终值，而不是当时的循环值。因此，当你点击任何按钮时，`i` 的值都会是循环结束时的值，即 `6`（`equipStrs` 数组的长度）。

### 解决方案
为了确保每个按钮的点击事件能捕获到正确的 `i` 值，你可以通过局部变量来显式地传递 `i` 的值。修改 `onClick` 的写法如下：

```csharp
for (int i = 0; i < equipStrs.Length; i++)
{
    int index = i;  // 在此处显式保存 i 的值
    equipBtns[i].onClick.AddListener(() =>
    {
        typeTrans.gameObject.SetActive(false);
        detailTrans.gameObject.SetActive(true);
        ClearUI();
        var prefab = Resources.Load<GameObject>("Prefabs/Arcade/GoodsItem");
        Debug.Log(index);  // 使用局部变量 index，而不是 i
        var goodsItem = ConfigData.goods.Find(ele => ele.GoodsTypeId == 6 && ele.GoodsTypeChild == (index + 1));
    });
}
```

### 解释
1. `int index = i;` 将 `i` 的当前值复制到局部变量 `index`，然后在 `onClick` 事件中使用 `index` 而不是直接使用 `i`。
2. 这样每个按钮的点击事件就会使用当时循环中的 `i` 值，而不是循环结束后的 `6`。

现在，`Debug.Log` 将打印出正确的值（`0` 到 `5`），而不是一直输出 `6`。